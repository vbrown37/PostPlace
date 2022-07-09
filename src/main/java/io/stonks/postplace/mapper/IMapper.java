package io.stonks.postplace.mapper;

public interface IMapper<M, D> {
    M toModel(D dto);
    D toDto(M model);
}
