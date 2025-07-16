package ps.BE.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@NoArgsConstructor
@Getter
@Table(name = "discounts")
public class Discount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "UUID")
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "game_id", nullable = false)
    private Game game;

    @Column(name = "original_price")
    private Integer originalPrice;

    @Column(name = "discounted_price")
    private Integer discountedPrice;

    @Column(name = "discount_percent")
    private Integer discountPercent;

    @Column(name = "discount_start")
    private LocalDateTime discountStart;

    @Column(name = "discount_end")
    private LocalDateTime discountEnd;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Builder
    public Discount(Game game, Integer originalPrice, Integer discountedPrice, Integer discountPercent, LocalDateTime discountStart, LocalDateTime discountEnd) {
        this.game = game;
        this.originalPrice = originalPrice;
        this.discountedPrice = discountedPrice;
        this.discountPercent = discountPercent;
        this.discountStart = discountStart;
        this.discountEnd = discountEnd;
    }
}