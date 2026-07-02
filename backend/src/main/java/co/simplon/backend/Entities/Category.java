package co.simplon.backend.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "Category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String name;
    private String description;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Resource> resources = new ArrayList<>();

    public Category() {
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Resource> getResources() {
        return resources;
    }

    public void setResources(List<Resource> resources) {
        this.resources = resources;
    }

    public void addResource(Resource resource) {
        resources.add(resource);
        resource.setCategory(this);
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
