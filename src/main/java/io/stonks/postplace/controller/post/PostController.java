package io.stonks.postplace.controller.post;

import io.stonks.postplace.dto.post.PostDTO;
import io.stonks.postplace.service.post.PostService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;

@RestController
@RequiredArgsConstructor
@RequestMapping("/posts")
@Slf4j
public class PostController {

    private final PostService postService;

    @GetMapping("/{id}")
    public PostDTO getById(@PathVariable("id") String id){
        log.info(id);
        return postService.findByIdDTO(id);
    }

}
