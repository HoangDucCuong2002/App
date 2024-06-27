import React, { FC, useState } from "react"
// import { ImageStyle, TextStyle, View, ViewStyle } from "react-native"
// import { ListItem, Screen, Text } from "../components"
// import { spacing } from "../theme"
// import { openLinkInBrowser } from "../utils/openLinkInBrowser"
// import { isRTL } from "../i18n"
import { ProjectTabScreenProps } from "../navigators/ProjectNavigator"
import { SelectField } from "../components/SelectField"
import { spacing } from "app/theme";
import { View, ViewStyle } from "react-native";


export const ProjectScreen: FC<ProjectTabScreenProps<"Project">> =
  function ProjectScreen(_props) {
    const teams = [
      { label: "Hawks", value: "ATL" },
      { label: "Celtics", value: "BOS" },
      { label: "Nets", value: "BKN" },
      { label: "Hornets", value: "CHA" },
      { label: "Bulls", value: "CHI" },
      { label: "Cavaliers", value: "CLE" },
      { label: "Mavericks", value: "DAL" },
      { label: "Nuggets", value: "DEN" },
      { label: "Pistons", value: "DET" },
      { label: "Warriors", value: "GSW" },
      { label: "Rockets", value: "HOU" },
      { label: "Pacers", value: "IND" },
      { label: "Clippers", value: "LAC" },
      { label: "Lakers", value: "LAL" },
      { label: "Grizzlies", value: "MEM" },
      { label: "Heat", value: "MIA" },
      { label: "Bucks", value: "MIL" },
      { label: "Timberwolves", value: "MIN" },
      { label: "Pelicans", value: "NOP" },
      { label: "Knicks", value: "NYK" },
      { label: "Thunder", value: "OKC" },
      { label: "Magic", value: "ORL" },
      { label: "76ers", value: "PHI" },
      { label: "Suns", value: "PHX" },
      { label: "Trail Blazers", value: "POR" },
      { label: "Kings", value: "SAC" },
      { label: "Spurs", value: "SAS" },
      { label: "Raptors", value: "TOR" },
      { label: "Jazz", value: "UTA" },
      { label: "Wizards", value: "WAS" },
    ];
    
    const [selectedTeam, setSelectedTeam] = useState<string[]>([]);
    const [selectedTeams, setSelectedTeams] = useState<string[]>([]);  
      return (
        <>
          <View style = {$centeredContainer}>
            <View style={$formContainer}>
              <SelectField
                label="NBA Team(s)"
                helper="Select your team(s)"
                placeholder="e.g. Knicks"
                value={selectedTeam}
                onSelect={setSelectedTeam}
                options={teams}
                multiple={false}
                containerStyle={{ marginBottom: spacing.lg }}
            />
              <SelectField
                label="NBA Team(s)"
                helper="Select your team(s)"
                placeholder="e.g. Trail Blazers"
                value={selectedTeam}
                onSelect={setSelectedTeam}
                options={teams}
                containerStyle={{ marginBottom: spacing.lg }}
                multiline
                
              />

              <SelectField
                label="NBA Team(s)"
                helper="Select your team(s)"
                placeholder="e.g. Trail Blazers"
                value={selectedTeams}
                onSelect={setSelectedTeams}
                options={teams}
                containerStyle={{ marginBottom: spacing.lg }}
                renderValue={(value) => `Selected ${value.length} Teams`}
              />
            </View>
          </View>
        </>
      )
  }
  const $centeredContainer: ViewStyle = {
    flex: 1, // Take full height of the screen
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: '#f8f8f8', // Optional: Light background color
    marginBottom: 50,
  } 
  const $formContainer: ViewStyle = {
    width: '95%', // Adjust the width to fit the content
    maxWidth: 600, // Maximum width for the form
    padding: spacing.lg, // Add some padding
    backgroundColor: '#ffffff', // Optional: White background for the form
    borderRadius: 10, // Optional: Rounded corners for the form
    shadowColor: '#000', // Optional: Shadow for depth
    shadowOffset: { width: 0, height: 2 }, // Optional: Shadow offset
    shadowOpacity: 0.2, // Optional: Shadow opacity
    shadowRadius: 4, // Optional: Shadow radius
    elevation: 5, // Optional: Elevation for Android
  }

