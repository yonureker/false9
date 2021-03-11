/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBudget = /* GraphQL */ `
  mutation CreateBudget(
    $input: CreateBudgetInput!
    $condition: ModelBudgetConditionInput
  ) {
    createBudget(input: $input, condition: $condition) {
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
export const updateBudget = /* GraphQL */ `
  mutation UpdateBudget(
    $input: UpdateBudgetInput!
    $condition: ModelBudgetConditionInput
  ) {
    updateBudget(input: $input, condition: $condition) {
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
export const deleteBudget = /* GraphQL */ `
  mutation DeleteBudget(
    $input: DeleteBudgetInput!
    $condition: ModelBudgetConditionInput
  ) {
    deleteBudget(input: $input, condition: $condition) {
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
export const createPerformance = /* GraphQL */ `
  mutation CreatePerformance(
    $input: CreatePerformanceInput!
    $condition: ModelPerformanceConditionInput
  ) {
    createPerformance(input: $input, condition: $condition) {
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
export const updatePerformance = /* GraphQL */ `
  mutation UpdatePerformance(
    $input: UpdatePerformanceInput!
    $condition: ModelPerformanceConditionInput
  ) {
    updatePerformance(input: $input, condition: $condition) {
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
export const deletePerformance = /* GraphQL */ `
  mutation DeletePerformance(
    $input: DeletePerformanceInput!
    $condition: ModelPerformanceConditionInput
  ) {
    deletePerformance(input: $input, condition: $condition) {
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
export const createMatch = /* GraphQL */ `
  mutation CreateMatch(
    $input: CreateMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    createMatch(input: $input, condition: $condition) {
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
export const updateMatch = /* GraphQL */ `
  mutation UpdateMatch(
    $input: UpdateMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    updateMatch(input: $input, condition: $condition) {
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
export const deleteMatch = /* GraphQL */ `
  mutation DeleteMatch(
    $input: DeleteMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    deleteMatch(input: $input, condition: $condition) {
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
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
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
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createLeague = /* GraphQL */ `
  mutation CreateLeague(
    $input: CreateLeagueInput!
    $condition: ModelLeagueConditionInput
  ) {
    createLeague(input: $input, condition: $condition) {
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
export const updateLeague = /* GraphQL */ `
  mutation UpdateLeague(
    $input: UpdateLeagueInput!
    $condition: ModelLeagueConditionInput
  ) {
    updateLeague(input: $input, condition: $condition) {
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
export const deleteLeague = /* GraphQL */ `
  mutation DeleteLeague(
    $input: DeleteLeagueInput!
    $condition: ModelLeagueConditionInput
  ) {
    deleteLeague(input: $input, condition: $condition) {
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
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
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
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
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
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
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
export const createNationalTeam = /* GraphQL */ `
  mutation CreateNationalTeam(
    $input: CreateNationalTeamInput!
    $condition: ModelNationalTeamConditionInput
  ) {
    createNationalTeam(input: $input, condition: $condition) {
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
export const updateNationalTeam = /* GraphQL */ `
  mutation UpdateNationalTeam(
    $input: UpdateNationalTeamInput!
    $condition: ModelNationalTeamConditionInput
  ) {
    updateNationalTeam(input: $input, condition: $condition) {
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
export const deleteNationalTeam = /* GraphQL */ `
  mutation DeleteNationalTeam(
    $input: DeleteNationalTeamInput!
    $condition: ModelNationalTeamConditionInput
  ) {
    deleteNationalTeam(input: $input, condition: $condition) {
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
export const createSquad = /* GraphQL */ `
  mutation CreateSquad(
    $input: CreateSquadInput!
    $condition: ModelSquadConditionInput
  ) {
    createSquad(input: $input, condition: $condition) {
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
export const updateSquad = /* GraphQL */ `
  mutation UpdateSquad(
    $input: UpdateSquadInput!
    $condition: ModelSquadConditionInput
  ) {
    updateSquad(input: $input, condition: $condition) {
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
export const deleteSquad = /* GraphQL */ `
  mutation DeleteSquad(
    $input: DeleteSquadInput!
    $condition: ModelSquadConditionInput
  ) {
    deleteSquad(input: $input, condition: $condition) {
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
export const createLeagueTeam = /* GraphQL */ `
  mutation CreateLeagueTeam(
    $input: CreateLeagueTeamInput!
    $condition: ModelLeagueTeamConditionInput
  ) {
    createLeagueTeam(input: $input, condition: $condition) {
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
export const updateLeagueTeam = /* GraphQL */ `
  mutation UpdateLeagueTeam(
    $input: UpdateLeagueTeamInput!
    $condition: ModelLeagueTeamConditionInput
  ) {
    updateLeagueTeam(input: $input, condition: $condition) {
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
export const deleteLeagueTeam = /* GraphQL */ `
  mutation DeleteLeagueTeam(
    $input: DeleteLeagueTeamInput!
    $condition: ModelLeagueTeamConditionInput
  ) {
    deleteLeagueTeam(input: $input, condition: $condition) {
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
export const createSquadPlayer = /* GraphQL */ `
  mutation CreateSquadPlayer(
    $input: CreateSquadPlayerInput!
    $condition: ModelSquadPlayerConditionInput
  ) {
    createSquadPlayer(input: $input, condition: $condition) {
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
export const updateSquadPlayer = /* GraphQL */ `
  mutation UpdateSquadPlayer(
    $input: UpdateSquadPlayerInput!
    $condition: ModelSquadPlayerConditionInput
  ) {
    updateSquadPlayer(input: $input, condition: $condition) {
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
export const deleteSquadPlayer = /* GraphQL */ `
  mutation DeleteSquadPlayer(
    $input: DeleteSquadPlayerInput!
    $condition: ModelSquadPlayerConditionInput
  ) {
    deleteSquadPlayer(input: $input, condition: $condition) {
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
