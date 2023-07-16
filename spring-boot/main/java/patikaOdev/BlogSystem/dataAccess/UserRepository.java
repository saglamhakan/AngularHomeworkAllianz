package patikaOdev.BlogSystem.dataAccess;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import patikaOdev.BlogSystem.entities.User;

import java.lang.annotation.Native;

public interface UserRepository extends JpaRepository<User, Long> {
    @Query(value = "Select count(*) from users", nativeQuery = true)
    Integer countUser();
}
