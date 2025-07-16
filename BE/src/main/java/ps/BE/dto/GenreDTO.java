package ps.BE.dto;

import java.util.UUID;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class GenreDTO {
    private UUID id;
    private String name;

    @Builder
    public GenreDTO(UUID id, String name) {
        this.id = id;
        this.name = name;
    }
}
