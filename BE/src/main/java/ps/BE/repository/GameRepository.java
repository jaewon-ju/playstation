package ps.BE.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ps.BE.entity.Game;

@Repository
public interface GameRepository extends JpaRepository<Game, UUID> {
    @Query("SELECT g FROM Game g ORDER BY g.id DESC")
    List<Game> findFirstPageOrderByIdDesc(Pageable pageable);

    @Query("SELECT g FROM Game g WHERE g.id < :lastId ORDER BY g.id DESC")
    List<Game> findNextPageAfterOrderByIdDesc(@Param("lastId") UUID lastId, Pageable pageable);
}