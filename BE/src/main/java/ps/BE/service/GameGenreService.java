package ps.BE.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ps.BE.repository.GameGenreRepository;

@Service
public class GameGenreService {
    private final GameGenreRepository gameGenreRepository;

    @Autowired
    public GameGenreService(GameGenreRepository gameGenreRepository) {
        this.gameGenreRepository = gameGenreRepository;
    }
}
