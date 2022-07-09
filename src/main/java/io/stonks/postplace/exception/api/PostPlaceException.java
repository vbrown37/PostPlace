package io.stonks.postplace.exception.api;

import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PostPlaceException extends RuntimeException {

    //TODO Default Values

    String title;

    Integer code;

    String message;

    public PostPlaceExceptionDTO toDto(){
        return PostPlaceExceptionDTO
                .builder()
                .title(title)
                .code(code)
                .message(message)
                .build();
    }

}
