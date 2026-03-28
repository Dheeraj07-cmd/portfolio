package com.dheeraj.portfolio.service;

import com.dheeraj.portfolio.dto.ContactRequest;
import com.dheeraj.portfolio.model.ContactMessage;
import com.dheeraj.portfolio.repository.ContactMessageRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class ContactService {

    private final ContactMessageRepository contactMessageRepository;
    private final JavaMailSender mailSender;

    @Value("${app.owner.email}")
    private String ownerEmail;

    @Transactional
    public void processMessage(ContactRequest req) {

        ContactMessage message = ContactMessage.builder()
                .name(req.getName())
                .email(req.getEmail())
                .message(req.getMessage())
                .build();

        contactMessageRepository.save(message);
        log.info("Saved new contact message from: {}", req.getEmail());

        sendEmailNotification(req);
    }

    private void sendEmailNotification(ContactRequest req) {
        try {
            SimpleMailMessage mail = new SimpleMailMessage();
            mail.setTo(ownerEmail);
            mail.setReplyTo(req.getEmail());
            mail.setSubject("New Portfolio Message from " + req.getName());
            mail.setText("You received a new message from your portfolio website!\n\n" +
                    "Name: " + req.getName() + "\n" +
                    "Email: " + req.getEmail() + "\n\n" +
                    "Message:\n" + req.getMessage());

            mailSender.send(mail);
            log.info("Email notification sent successfully to {}", ownerEmail);
        } catch (Exception e) {
            log.error("Failed to send email notification: {}", e.getMessage());

        }
    }

}