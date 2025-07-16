package ps.BE.dto;

import java.time.LocalDateTime;
import java.util.UUID;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import ps.BE.entity.Game;


@Getter
@NoArgsConstructor
public class GameDTO {
    private UUID id;
    private String title;
    private String imageUrl;
    private Integer originalPrice;
    private Integer currentPrice;
    private Boolean isEssential;
    private Boolean isSpecial;
    private Boolean isDelux;
    private Boolean isMonthly;
    private LocalDateTime createdAt;

    @Builder
    public GameDTO(UUID id, String title, String imageUrl, Integer originalPrice, Integer currentPrice, Boolean isEssential, Boolean isSpecial, Boolean isDelux, Boolean isMonthly, LocalDateTime createdAt) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.originalPrice = originalPrice;
        this.currentPrice = currentPrice;
        this.isEssential = isEssential;
        this.isSpecial = isSpecial;
        this.isDelux = isDelux;
        this.isMonthly = isMonthly;
        this.createdAt = createdAt;    
    }

    public static GameDTO toDTO(Game game) {
        return GameDTO.builder()
        .id(game.getId())
        .title(game.getTitle())
        .imageUrl(game.getImageUrl())
        .originalPrice(game.getOriginalPrice())
        .currentPrice(game.getCurrentPrice())
        .isEssential(game.getIsEssential())
        .isSpecial(game.getIsSpecial())
        .isDelux(game.getIsDelux())
        .isMonthly(game.getIsMonthly())
        .createdAt(game.getCreatedAt())
        .build();
    }
}
