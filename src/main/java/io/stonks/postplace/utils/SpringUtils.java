package io.stonks.postplace.utils;

import lombok.SneakyThrows;
import lombok.experimental.UtilityClass;

import java.util.Optional;

@UtilityClass
public class SpringUtils {

    @SneakyThrows
    public <T> T optionally(Optional<T> opt, RuntimeException ex) {
        if (opt.isEmpty()) throw ex;
        return opt.get();
    }

    @SneakyThrows
    public <T> T optionally(Optional<T> opt, Class<? extends RuntimeException> ex) {
        if (opt.isEmpty()) throw ex.getDeclaredConstructor().newInstance();
        return opt.get();
    }

}
