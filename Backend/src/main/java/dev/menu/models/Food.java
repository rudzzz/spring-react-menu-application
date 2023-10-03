package dev.menu.models;

import dev.menu.dtos.FoodRequestDTO;
import jakarta.persistence.*;

@Table(name = "food")
@Entity(name = "food")
public class Food {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String image_url;
    private Integer price;

    public Food(){

    }
    public Food(FoodRequestDTO data){
        this.title = data.title();
        this.image_url = data.image_url();
        this.price = data.price();
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImage_url() {
        return image_url;
    }

    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }
}
