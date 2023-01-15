package com.safalifter.twitterclone.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class TweetDto {
    private Long id;
    private String text;
    private Long userId;
    private List<LikeDto> likes;
    private List<CommentDto> comments;
}