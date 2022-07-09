package io.stonks.postplace.entity.post;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Document
@Data
public class Post {

    @MongoId(FieldType.OBJECT_ID)
    String id;

    String title;

    String content;

}
