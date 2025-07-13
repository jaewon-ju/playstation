package ps.BE.repository;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ps.BE.entity.Game;

@Repository
public interface GameRepository extends JpaRepository<Game, UUID> {
}