package ps.BE.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ps.BE.dto.GameDTO;
import ps.BE.service.GameService;

@RestController
@RequestMapping("/games")
public class GameController {
    private final GameService gameService;

    @Autowired
    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @GetMapping
    public List<GameDTO> getGames(
            @RequestParam(required = false) UUID lastId,
            @RequestParam(defaultValue = "20") int size) {
    
        if (lastId == null) {
            return gameService.getFirstPage(size); // 첫 페이지
        } else {
            return gameService.getNextPageAfter(lastId, size); // 커서 이후 페이지
        }
    }
}
