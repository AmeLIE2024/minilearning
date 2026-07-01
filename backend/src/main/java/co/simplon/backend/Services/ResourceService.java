package co.simplon.backend.Services;

import co.simplon.backend.Entities.Resource;
import co.simplon.backend.Enums.Status;
import co.simplon.backend.Enums.Type;
import co.simplon.backend.Repositories.ResourceRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public class ResourceService {

    private ResourceRepository resourceRepository;

    public ResourceService(ResourceRepository resourceRepository) {
        this.resourceRepository = resourceRepository;

    }
    public List<Resource> findAllResource(Resource resource) {
        return resourceRepository.findAll();
    }
    public Optional<Resource> findResourceById(UUID id) {
       return resourceRepository.findById(id);
    }
    public void createResource(Resource resource) {
        resourceRepository.save(resource);
    }
    public List<Resource> findResourceByType(Type type) {
        return resourceRepository.findAllByType(type);
    }
    public List<Resource> findResourceByStatus(Status status) {
        return resourceRepository.findAllByStatus(status);
    }
}
