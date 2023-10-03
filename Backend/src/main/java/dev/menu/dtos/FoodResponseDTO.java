package dev.menu.dtos;

import dev.menu.models.Food;

public record FoodResponseDTO(Long id, String title, String image_url, Integer price) {
    public FoodResponseDTO(Food food){
        this(food.getId(), food.getTitle(), food.getImage_url(), food.getPrice());
    }
}
