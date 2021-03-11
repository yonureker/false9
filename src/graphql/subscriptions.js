/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBudget = /* GraphQL */ `
  subscription OnCreateBudget {
    onCreateBudget {
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
export const onUpdateBudget = /* GraphQL */ `
  subscription OnUpdateBudget {
    onUpdateBudget {
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
export const onDeleteBudget = /* GraphQL */ `
  subscription OnDeleteBudget {
    onDeleteBudget {
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
export const onCreatePerformance = /* GraphQL */ `
  subscription OnCreatePerformance {
    onCreatePerformance {
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
export const onUpdatePerformance = /* GraphQL */ `
  subscription OnUpdatePerformance {
    onUpdatePerformance {
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
export const onDeletePerformance = /* GraphQL */ `
  subscription OnDeletePerformance {
    onDeletePerformance {
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
export const onCreateMatch = /* GraphQL */ `
  subscription OnCreateMatch {
    onCreateMatch {
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
export const onUpdateMatch = /* GraphQL */ `
  subscription OnUpdateMatch {
    onUpdateMatch {
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
export const onDeleteMatch = /* GraphQL */ `
  subscription OnDeleteMatch {
    onDeleteMatch {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
      id
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
      id
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
      id
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      phoneNumber
      team {
        id
        leagues {
          nextToken
        }
        name
        squads {
          nextToken
        }
        totalPoints
        createdAt
        updatedAt
      }
      referrals {
        items {
          id
          phoneNumber
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      phoneNumber
      team {
        id
        leagues {
          nextToken
        }
        name
        squads {
          nextToken
        }
        totalPoints
        createdAt
        updatedAt
      }
      referrals {
        items {
          id
          phoneNumber
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      phoneNumber
      team {
        id
        leagues {
          nextToken
        }
        name
        squads {
          nextToken
        }
        totalPoints
        createdAt
        updatedAt
      }
      referrals {
        items {
          id
          phoneNumber
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
export const onCreateLeague = /* GraphQL */ `
  subscription OnCreateLeague {
    onCreateLeague {
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
export const onUpdateLeague = /* GraphQL */ `
  subscription OnUpdateLeague {
    onUpdateLeague {
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
export const onDeleteLeague = /* GraphQL */ `
  subscription OnDeleteLeague {
    onDeleteLeague {
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
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
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
export const onCreateNationalTeam = /* GraphQL */ `
  subscription OnCreateNationalTeam {
    onCreateNationalTeam {
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
export const onUpdateNationalTeam = /* GraphQL */ `
  subscription OnUpdateNationalTeam {
    onUpdateNationalTeam {
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
export const onDeleteNationalTeam = /* GraphQL */ `
  subscription OnDeleteNationalTeam {
    onDeleteNationalTeam {
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
export const onCreateSquad = /* GraphQL */ `
  subscription OnCreateSquad {
    onCreateSquad {
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
        leagues {
          nextToken
        }
        name
        squads {
          nextToken
        }
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
export const onUpdateSquad = /* GraphQL */ `
  subscription OnUpdateSquad {
    onUpdateSquad {
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
        leagues {
          nextToken
        }
        name
        squads {
          nextToken
        }
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
export const onDeleteSquad = /* GraphQL */ `
  subscription OnDeleteSquad {
    onDeleteSquad {
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
        leagues {
          nextToken
        }
        name
        squads {
          nextToken
        }
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
export const onCreateLeagueTeam = /* GraphQL */ `
  subscription OnCreateLeagueTeam {
    onCreateLeagueTeam {
      id
      leagueID
      teamID
      league {
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
      team {
        id
        leagues {
          nextToken
        }
        name
        squads {
          nextToken
        }
        totalPoints
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLeagueTeam = /* GraphQL */ `
  subscription OnUpdateLeagueTeam {
    onUpdateLeagueTeam {
      id
      leagueID
      teamID
      league {
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
      team {
        id
        leagues {
          nextToken
        }
        name
        squads {
          nextToken
        }
        totalPoints
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLeagueTeam = /* GraphQL */ `
  subscription OnDeleteLeagueTeam {
    onDeleteLeagueTeam {
      id
      leagueID
      teamID
      league {
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
      team {
        id
        leagues {
          nextToken
        }
        name
        squads {
          nextToken
        }
        totalPoints
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSquadPlayer = /* GraphQL */ `
  subscription OnCreateSquadPlayer {
    onCreateSquadPlayer {
      id
      squadID
      playerID
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSquadPlayer = /* GraphQL */ `
  subscription OnUpdateSquadPlayer {
    onUpdateSquadPlayer {
      id
      squadID
      playerID
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSquadPlayer = /* GraphQL */ `
  subscription OnDeleteSquadPlayer {
    onDeleteSquadPlayer {
      id
      squadID
      playerID
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
      createdAt
      updatedAt
    }
  }
`;
