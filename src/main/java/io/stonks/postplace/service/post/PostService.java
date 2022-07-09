package io.stonks.postplace.service.post;

import io.stonks.postplace.dto.post.PostDTO;
import io.stonks.postplace.entity.post.Post;

public interface PostService {
    Post findById(String id);

    PostDTO findByIdDTO(String id);
}
