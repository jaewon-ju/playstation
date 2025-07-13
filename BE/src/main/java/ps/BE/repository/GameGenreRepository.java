package ps.BE.repository;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ps.BE.entity.GameGenre;

@Repository
public interface GameGenreRepository extends JpaRepository<GameGenre, UUID> {
}