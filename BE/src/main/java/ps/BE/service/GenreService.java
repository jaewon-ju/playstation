package ps.BE.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ps.BE.repository.GenreRepository;
import ps.BE.entity.Genre;
import ps.BE.dto.GenreDTO;

@Service
public class GenreService {
    private final GenreRepository genreRepository;

    @Autowired
    public GenreService(GenreRepository genreRepository) {
        this.genreRepository = genreRepository;
    }

    public List<GenreDTO> getAllGenre() {
        List<Genre> genres = genreRepository.findAll();
        return genres.stream().map(GenreDTO::toDTO).toList();
    }
}
