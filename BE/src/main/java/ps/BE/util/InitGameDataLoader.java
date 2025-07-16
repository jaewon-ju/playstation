package ps.BE.util;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import ps.BE.entity.Game;
import ps.BE.entity.Genre;
import ps.BE.entity.GameGenre;
import ps.BE.repository.GameRepository;
import ps.BE.repository.GenreRepository;
import ps.BE.repository.GameGenreRepository;

import java.io.InputStream;
import java.util.*;

@Component
@Slf4j
public class InitGameDataLoader {

    private final GameRepository gameRepository;
    private final GenreRepository genreRepository;
    private final GameGenreRepository gameGenreRepository;

    @Autowired
    public InitGameDataLoader(GameRepository gameRepository, GenreRepository genreRepository, GameGenreRepository gameGenreRepository) {
        this.gameRepository = gameRepository;
        this.genreRepository = genreRepository;
        this.gameGenreRepository = gameGenreRepository;
    }

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Transactional
    public void init() {
        try {
            InputStream inputStream = new ClassPathResource("games_list.json").getInputStream();
            List<Map<String, Object>> gameList = objectMapper.readValue(inputStream, new TypeReference<>() {});

            for (Map<String, Object> gameMap : gameList) {
                String title = (String) gameMap.get("title");
                String imageUrl = (String) gameMap.get("image_url");
                Integer originalPrice = (Integer) gameMap.get("original_price");
                Integer currentPrice = (Integer) gameMap.get("current_price");
                String genreName = (String) gameMap.get("genre");

                Game game = Game.builder()
                        .title(title)
                        .imageUrl(imageUrl)
                        .originalPrice(originalPrice)
                        .currentPrice(currentPrice)
                        .isEssential(false)
                        .isDelux(false)
                        .isSpecial(false)
                        .isMonthly(false)
                        .build();
                gameRepository.save(game);
                log.info("Game saved: {}", game.getTitle());

                Genre genre = genreRepository.findByName(genreName)
                        .orElseGet(() -> genreRepository.save(Genre.builder().name(genreName).build()));

                GameGenre gameGenre = GameGenre.builder()
                        .game(game)
                        .genre(genre)
                        .build();

                gameGenreRepository.save(gameGenre);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
