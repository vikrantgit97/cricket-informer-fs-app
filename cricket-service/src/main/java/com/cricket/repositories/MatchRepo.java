package com.cricket.repositories;

import com.cricket.entities.Match;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MatchRepo extends JpaRepository<Match,Integer> {

    Optional<Match> findByTeamHeading(String teamHeading);

    Optional<Match> findByMatchNumberVenue(String matchNumberVenue);

}
