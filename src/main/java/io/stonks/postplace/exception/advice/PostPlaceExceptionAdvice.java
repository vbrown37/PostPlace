package io.stonks.postplace.exception.advice;

import io.stonks.postplace.exception.api.PostPlaceException;
import io.stonks.postplace.exception.api.PostPlaceExceptionDTO;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletResponse;

@ControllerAdvice
public class PostPlaceExceptionAdvice {

    @ExceptionHandler(PostPlaceException.class)
    public PostPlaceExceptionDTO handle(HttpServletResponse resp, PostPlaceException e){
        e.printStackTrace();
        resp.setStatus(e.getCode());
        return e.toDto();
    }

}