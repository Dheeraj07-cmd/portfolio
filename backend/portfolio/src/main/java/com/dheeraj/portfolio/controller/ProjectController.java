package com.dheeraj.portfolio.controller;

import com.dheeraj.portfolio.model.Project;
import com.dheeraj.portfolio.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController @RequestMapping("/api/projects")
@RequiredArgsConstructor
public class ProjectController {
    private final ProjectRepository projectRepository;

    @GetMapping
    public List<Project> getAll() {
        return projectRepository.findAllByOrderByDisplayOrderAsc();    }

    @GetMapping("/featured")
    public List<Project> getFeatured() {
        return projectRepository.findByFeaturedTrueOrderByDisplayOrderAsc();
    }

}
