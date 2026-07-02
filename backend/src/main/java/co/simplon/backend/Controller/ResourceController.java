package co.simplon.backend.Controller;

import co.simplon.backend.Entities.Resource;
import co.simplon.backend.Services.ResourceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("api/resources")
public class ResourceController {

    private final ResourceService resourceService;

    public ResourceController(ResourceService resourceService) {
        this.resourceService = resourceService;
    }

    @GetMapping
    public List<Resource> getAllResources() {

        return this.resourceService.findAllResource();
    }

    @GetMapping("/{id}")
    public Optional<Resource> getResourceById(@PathVariable UUID id) {
        return this.resourceService.findResourceById(id);
    }

    @PostMapping
    public Resource createResource(@RequestBody Resource resource) {
       return this.resourceService.createResource(resource);
    }


}
