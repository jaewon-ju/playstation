package ps.BE.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import ps.BE.dto.GameDTO;
import ps.BE.entity.Game;
import ps.BE.repository.GameRepository;

@Service
public class GameService {
    private final GameRepository gameRepository;

    @Autowired
    public GameService(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    public List<GameDTO> getFirstPage(int size) {
        Pageable pageable = PageRequest.of(0, size); 
        List<Game> games;

        games = gameRepository.findFirstPageOrderByIdDesc(pageable);
        return games.stream().map(GameDTO::toDTO).toList();
    }
    
    public List<GameDTO> getNextPageAfter(UUID lastId, int size) {
        Pageable pageable = PageRequest.of(0, size); 
        List<Game> games = gameRepository.findNextPageAfterOrderByIdDesc(lastId, pageable);
        return games.stream().map(GameDTO::toDTO).toList();
    }
}
