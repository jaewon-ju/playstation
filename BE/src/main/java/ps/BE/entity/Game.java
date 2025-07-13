package ps.BE.entity;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;

import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Getter
@Table(name = "games")
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "UUID")
    private UUID id;

    @Column(nullable = false)
    private String title;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "original_price")
    private Integer originalPrice;

    @Column(name = "current_price")
    private Integer currentPrice;

    @Column(name = "is_essential")
    private Boolean isEssential;

    @Column(name = "is_special")
    private Boolean isSpecial;

    @Column(name = "is_delux")
    private Boolean isDelux;

    @Column(name = "is_monthly")
    private Boolean isMonthly;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Builder
    public Game(String title, String imageUrl, Integer originalPrice, Integer currentPrice, Boolean isEssential, Boolean isSpecial, Boolean isDelux, Boolean isMonthly) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.originalPrice = originalPrice;
        this.currentPrice = currentPrice;
        this.isEssential = isEssential;
        this.isSpecial = isSpecial;
        this.isDelux = isDelux;
        this.isMonthly = isMonthly;
    }
}
