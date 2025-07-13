package ps.BE.entity;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Builder;

import java.util.UUID;

@Entity
@Getter
@NoArgsConstructor
@Table(name = "game_genres")
public class GameGenre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "UUID")
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "game_id", nullable = false)
    private Game game;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "genre_id", nullable = false)
    private Genre genre;

    @Builder
    public GameGenre(Game game, Genre genre) {
        this.game = game;
        this.genre = genre;
    }
}
