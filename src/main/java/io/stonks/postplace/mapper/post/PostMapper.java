package io.stonks.postplace.mapper.post;

import io.stonks.postplace.dto.post.PostDTO;
import io.stonks.postplace.entity.post.Post;
import io.stonks.postplace.mapper.IMapper;
import org.mapstruct.Mapper;

@Mapper
public interface PostMapper extends IMapper<Post, PostDTO> {
}
