package io.stonks.postplace.service.post;

import io.stonks.postplace.dto.post.PostDTO;
import io.stonks.postplace.entity.post.Post;
import io.stonks.postplace.exception.types.post.PostNotFound;
import io.stonks.postplace.mapper.post.PostMapper;
import io.stonks.postplace.repository.post.PostRepository;
import io.stonks.postplace.utils.SpringUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;
    private final PostMapper postMapper;

    @Override
    public Post findById(String id){
        Optional<Post> post = postRepository.findById(id);
        System.out.println(post.get());
        return SpringUtils.optionally(postRepository.findById(id), PostNotFound.class);
    }

    @Override
    public PostDTO findByIdDTO(String id){
        return postMapper.toDto(findById(id));
    }

    @PostConstruct
    public void test(){
        Post post =  new Post();
        post.setContent("<h1>Hello !</h1>");
        post.setTitle("Welcome !");
        postRepository.save(post);
    }
}
