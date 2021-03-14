/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBudget = /* GraphQL */ `
  query GetBudget($id: ID!) {
    getBudget(id: $id) {
      id
      referrals
      dailyLogin
      purchased
      earnWithNetfli
      squad {
        id
        players {
          nextToken
        }
        tactics
        value
        captain {
          id
          price
          position
          nationalteamID
          firstName
          lastName
          suspended
          injured
          removedFromSquad
          totalGoals
          totalAssists
          totalYellowCards
          totalRedCards
          totalShotsOnTarget
          totalOffsides
          totalFoulsCommitted
          totalOwnGoals
          totalHattricks
          totalPoints
          totalCleanSheets
          createdAt
          updatedAt
        }
        viceCaptain {
          id
          price
          position
          nationalteamID
          firstName
          lastName
          suspended
          injured
          removedFromSquad
          totalGoals
          totalAssists
          totalYellowCards
          totalRedCards
          totalShotsOnTarget
          totalOffsides
          totalFoulsCommitted
          totalOwnGoals
          totalHattricks
          totalPoints
          totalCleanSheets
          createdAt
          updatedAt
        }
        teamID
        team {
          id
          phoneNumber
          name
          totalPoints
          createdAt
          updatedAt
        }
        round
        budget {
          id
          referrals
          dailyLogin
          purchased
          earnWithNetfli
          base
          createdAt
          updatedAt
        }
        totalPoints
        createdAt
        updatedAt
      }
      base
      createdAt
      updatedAt
    }
  }
`;
export const listBudgets = /* GraphQL */ `
  query ListBudgets(
    $filter: ModelBudgetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBudgets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        referrals
        dailyLogin
        purchased
        earnWithNetfli
        squad {
          id
          tactics
          value
          teamID
          round
          totalPoints
          createdAt
          updatedAt
        }
        base
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPerformance = /* GraphQL */ `
  query GetPerformance($id: ID!) {
    getPerformance(id: $id) {
      id
      minutes
      goals
      assists
      yellowCards
      redCards
      match {
        id
        round
        date
        homeTeam {
          id
          active
          name
          createdAt
          updatedAt
        }
        awayTeam {
          id
          active
          name
          createdAt
          updatedAt
        }
        performances {
          nextToken
        }
        createdAt
        updatedAt
      }
      matchID
      player {
        id
        price
        position
        nationalteamID
        squads {
          nextToken
        }
        firstName
        lastName
        nationalTeam {
          id
          active
          name
          createdAt
          updatedAt
        }
        performances {
          nextToken
        }
        suspended
        injured
        removedFromSquad
        totalGoals
        totalAssists
        totalYellowCards
        totalRedCards
        totalShotsOnTarget
        totalOffsides
        totalFoulsCommitted
        totalOwnGoals
        totalHattricks
        totalPoints
        totalCleanSheets
        createdAt
        updatedAt
      }
      playerID
      shotsOnTarget
      offsides
      foulsCommitted
      cleanSheet
      ownGoals
      hattricks
      totalPoints
      savedPenalties
      missedPenalties
      createdAt
      updatedAt
    }
  }
`;
export const listPerformances = /* GraphQL */ `
  query ListPerformances(
    $filter: ModelPerformanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPerformances(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        minutes
        goals
        assists
        yellowCards
        redCards
        match {
          id
          round
          date
          createdAt
          updatedAt
        }
        matchID
        player {
          id
          price
          position
          nationalteamID
          firstName
          lastName
          suspended
          injured
          removedFromSquad
          totalGoals
          totalAssists
          totalYellowCards
          totalRedCards
          totalShotsOnTarget
          totalOffsides
          totalFoulsCommitted
          totalOwnGoals
          totalHattricks
          totalPoints
          totalCleanSheets
          createdAt
          updatedAt
        }
        playerID
        shotsOnTarget
        offsides
        foulsCommitted
        cleanSheet
        ownGoals
        hattricks
        totalPoints
        savedPenalties
        missedPenalties
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMatch = /* GraphQL */ `
  query GetMatch($id: ID!) {
    getMatch(id: $id) {
      id
      round
      date
      homeTeam {
        id
        active
        players {
          nextToken
        }
        name
        createdAt
        updatedAt
      }
      awayTeam {
        id
        active
        players {
          nextToken
        }
        name
        createdAt
        updatedAt
      }
      performances {
        items {
          id
          minutes
          goals
          assists
          yellowCards
          redCards
          matchID
          playerID
          shotsOnTarget
          offsides
          foulsCommitted
          cleanSheet
          ownGoals
          hattricks
          totalPoints
          savedPenalties
          missedPenalties
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMatchs = /* GraphQL */ `
  query ListMatchs(
    $filter: ModelMatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMatchs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        round
        date
        homeTeam {
          id
          active
          name
          createdAt
          updatedAt
        }
        awayTeam {
          id
          active
          name
          createdAt
          updatedAt
        }
        performances {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      phoneNumber
      leagues {
        items {
          id
          leagueID
          teamID
          createdAt
          updatedAt
        }
        nextToken
      }
      name
      squads {
        items {
          id
          tactics
          value
          teamID
          round
          totalPoints
          createdAt
          updatedAt
        }
        nextToken
      }
      totalPoints
      referrals {
        items {
          id
          phoneNumber
          name
          totalPoints
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        phoneNumber
        leagues {
          nextToken
        }
        name
        squads {
          nextToken
        }
        totalPoints
        referrals {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLeague = /* GraphQL */ `
  query GetLeague($id: ID!) {
    getLeague(id: $id) {
      id
      teams {
        items {
          id
          leagueID
          teamID
          createdAt
          updatedAt
        }
        nextToken
      }
      type
      password
      name
      createdAt
      updatedAt
    }
  }
`;
export const listLeagues = /* GraphQL */ `
  query ListLeagues(
    $filter: ModelLeagueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeagues(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        teams {
          nextToken
        }
        type
        password
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      price
      position
      nationalteamID
      squads {
        items {
          id
          squadID
          playerID
          createdAt
          updatedAt
        }
        nextToken
      }
      firstName
      lastName
      nationalTeam {
        id
        active
        players {
          nextToken
        }
        name
        createdAt
        updatedAt
      }
      performances {
        items {
          id
          minutes
          goals
          assists
          yellowCards
          redCards
          matchID
          playerID
          shotsOnTarget
          offsides
          foulsCommitted
          cleanSheet
          ownGoals
          hattricks
          totalPoints
          savedPenalties
          missedPenalties
          createdAt
          updatedAt
        }
        nextToken
      }
      suspended
      injured
      removedFromSquad
      totalGoals
      totalAssists
      totalYellowCards
      totalRedCards
      totalShotsOnTarget
      totalOffsides
      totalFoulsCommitted
      totalOwnGoals
      totalHattricks
      totalPoints
      totalCleanSheets
      createdAt
      updatedAt
    }
  }
`;
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        price
        position
        nationalteamID
        squads {
          nextToken
        }
        firstName
        lastName
        nationalTeam {
          id
          active
          name
          createdAt
          updatedAt
        }
        performances {
          nextToken
        }
        suspended
        injured
        removedFromSquad
        totalGoals
        totalAssists
        totalYellowCards
        totalRedCards
        totalShotsOnTarget
        totalOffsides
        totalFoulsCommitted
        totalOwnGoals
        totalHattricks
        totalPoints
        totalCleanSheets
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNationalTeam = /* GraphQL */ `
  query GetNationalTeam($id: ID!) {
    getNationalTeam(id: $id) {
      id
      active
      players {
        items {
          id
          price
          position
          nationalteamID
          firstName
          lastName
          suspended
          injured
          removedFromSquad
          totalGoals
          totalAssists
          totalYellowCards
          totalRedCards
          totalShotsOnTarget
          totalOffsides
          totalFoulsCommitted
          totalOwnGoals
          totalHattricks
          totalPoints
          totalCleanSheets
          createdAt
          updatedAt
        }
        nextToken
      }
      name
      createdAt
      updatedAt
    }
  }
`;
export const listNationalTeams = /* GraphQL */ `
  query ListNationalTeams(
    $filter: ModelNationalTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNationalTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        active
        players {
          nextToken
        }
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSquad = /* GraphQL */ `
  query GetSquad($id: ID!) {
    getSquad(id: $id) {
      id
      players {
        items {
          id
          squadID
          playerID
          createdAt
          updatedAt
        }
        nextToken
      }
      tactics
      value
      captain {
        id
        price
        position
        nationalteamID
        squads {
          nextToken
        }
        firstName
        lastName
        nationalTeam {
          id
          active
          name
          createdAt
          updatedAt
        }
        performances {
          nextToken
        }
        suspended
        injured
        removedFromSquad
        totalGoals
        totalAssists
        totalYellowCards
        totalRedCards
        totalShotsOnTarget
        totalOffsides
        totalFoulsCommitted
        totalOwnGoals
        totalHattricks
        totalPoints
        totalCleanSheets
        createdAt
        updatedAt
      }
      viceCaptain {
        id
        price
        position
        nationalteamID
        squads {
          nextToken
        }
        firstName
        lastName
        nationalTeam {
          id
          active
          name
          createdAt
          updatedAt
        }
        performances {
          nextToken
        }
        suspended
        injured
        removedFromSquad
        totalGoals
        totalAssists
        totalYellowCards
        totalRedCards
        totalShotsOnTarget
        totalOffsides
        totalFoulsCommitted
        totalOwnGoals
        totalHattricks
        totalPoints
        totalCleanSheets
        createdAt
        updatedAt
      }
      teamID
      team {
        id
        phoneNumber
        leagues {
          nextToken
        }
        name
        squads {
          nextToken
        }
        totalPoints
        referrals {
          nextToken
        }
        createdAt
        updatedAt
      }
      round
      budget {
        id
        referrals
        dailyLogin
        purchased
        earnWithNetfli
        squad {
          id
          tactics
          value
          teamID
          round
          totalPoints
          createdAt
          updatedAt
        }
        base
        createdAt
        updatedAt
      }
      totalPoints
      createdAt
      updatedAt
    }
  }
`;
export const listSquads = /* GraphQL */ `
  query ListSquads(
    $filter: ModelSquadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSquads(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        players {
          nextToken
        }
        tactics
        value
        captain {
          id
          price
          position
          nationalteamID
          firstName
          lastName
          suspended
          injured
          removedFromSquad
          totalGoals
          totalAssists
          totalYellowCards
          totalRedCards
          totalShotsOnTarget
          totalOffsides
          totalFoulsCommitted
          totalOwnGoals
          totalHattricks
          totalPoints
          totalCleanSheets
          createdAt
          updatedAt
        }
        viceCaptain {
          id
          price
          position
          nationalteamID
          firstName
          lastName
          suspended
          injured
          removedFromSquad
          totalGoals
          totalAssists
          totalYellowCards
          totalRedCards
          totalShotsOnTarget
          totalOffsides
          totalFoulsCommitted
          totalOwnGoals
          totalHattricks
          totalPoints
          totalCleanSheets
          createdAt
          updatedAt
        }
        teamID
        team {
          id
          phoneNumber
          name
          totalPoints
          createdAt
          updatedAt
        }
        round
        budget {
          id
          referrals
          dailyLogin
          purchased
          earnWithNetfli
          base
          createdAt
          updatedAt
        }
        totalPoints
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const playersByNationalTeam = /* GraphQL */ `
  query PlayersByNationalTeam(
    $nationalteamID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    playersByNationalTeam(
      nationalteamID: $nationalteamID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        price
        position
        nationalteamID
        squads {
          nextToken
        }
        firstName
        lastName
        nationalTeam {
          id
          active
          name
          createdAt
          updatedAt
        }
        performances {
          nextToken
        }
        suspended
        injured
        removedFromSquad
        totalGoals
        totalAssists
        totalYellowCards
        totalRedCards
        totalShotsOnTarget
        totalOffsides
        totalFoulsCommitted
        totalOwnGoals
        totalHattricks
        totalPoints
        totalCleanSheets
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
