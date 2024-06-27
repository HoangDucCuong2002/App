import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { ProjectTabScreenProps } from "app/navigators/ProjectNavigator";
import React, { FC, useEffect, useState } from "react";
import { TextStyle, View, Text, ViewStyle, FlatList } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { IconButton } from "react-native-paper";

interface Todo {
  id: string;
  title: string;
}

export const TodoScreen: FC<ProjectTabScreenProps<"Todo">> = function TodoScreen(_props) {
  const emojiList = ["😀", "😎", "🎉", "🤔", "🔥", "🚀", "🌟", "💡", "❤️", "🎈"];
  const [selectedEmoji, setSelectedEmoji] = useState<string>("");
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [editedTodo, setEditedTodo] = useState<Todo | null>(null);

  // Select a random emoji on mount
  useEffect(() => {
    setSelectedEmoji(getRandomEmoji());
  }, []);

  // Function to get a random emoji
  const getRandomEmoji = (): string => {
    const randomIndex = Math.floor(Math.random() * emojiList.length);
    return emojiList[randomIndex];
  };

  const handleEmojiClick = (): void => {
    setSelectedEmoji(getRandomEmoji());
  };

  // Handle add todo
  const handleAddTodo = (): void => {
    if (todo === "") return;

    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    setTodo("");
  };

  // Handle delete todo
  const handleDeleteTodo = (id: string): void => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  // Handle edit todo
  const handleEditTodo = (todo: Todo): void => {
    setEditedTodo(todo);
    setTodo(todo.title);
  };

  // Handle update todo
  const handleUpdateTodo = (): void => {
    const updatedTodos = todoList.map((item) => {
      if (item.id === editedTodo?.id) {
        return { ...item, title: todo };
      }
      return item;
    });

    setTodoList(updatedTodos);
    setEditedTodo(null);
    setTodo("");
  };

  // Render todos
  const renderTodos = ({ item }: { item: Todo; index: number }): JSX.Element => {
    return (
      <View style={$render}>
        <Text style={$Wrote}>{item.title}</Text>

        <IconButton
          icon="pencil"
          iconColor="blue"
          onPress={() => handleEditTodo(item)}
        />
        <IconButton
          icon="trash-can"
          iconColor="red"
          onPress={() => handleDeleteTodo(item.id)}
        />

        {/* Emoji Button */}
        <TouchableOpacity
          style={$emojiButton}
          onPress={handleEmojiClick} // Change emoji on click
        >
          <Text style={$emoji}>{selectedEmoji}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={$centeredContainer}>
      <TextInput
        style={$textInput}
        placeholder="Add a task"
        value={todo}
        onChangeText={(userText: string) => setTodo(userText)}
      />

      {editedTodo ? (
        <TouchableOpacity style={$TouchableOpacity1} onPress={handleUpdateTodo}>
          <Text style={$Save}>Save</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={$TouchableOpacity2} onPress={handleAddTodo}>
          <Text style={$Add}>Add</Text>
        </TouchableOpacity>
      )}

      <FlatList
        data={todoList}
        renderItem={renderTodos}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

// Style Definitions
const $render: ViewStyle = {
  backgroundColor: "#1e90ff",
  borderRadius: 10,
  paddingHorizontal: 6,
  paddingVertical: 8,
  marginBottom: 12,
  flexDirection: "row",
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.8,
  shadowRadius: 3,
};

const $centeredContainer: ViewStyle = {
  marginHorizontal: 16,
  marginTop: 50,
  borderRadius: 10,
  flex: 1,
  backgroundColor: "#f8f8f8",
};

const $textInput: TextStyle = {
  borderWidth: 3,
  borderColor: "#000",
  borderRadius: 6,
  paddingVertical: 8,
  paddingHorizontal: 16,
};

const $TouchableOpacity1: ViewStyle = {
  backgroundColor: "red",
  borderRadius: 6,
  paddingVertical: 12,
  marginVertical: 34,
  alignItems: "center",
  shadowColor: "red",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.8,
  shadowRadius: 3,
};

const $TouchableOpacity2: ViewStyle = {
  backgroundColor: "#d534eb",
  borderRadius: 6,
  paddingVertical: 12,
  marginVertical: 34,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.8,
  shadowRadius: 3,
};

const $Save: TextStyle = {
  color: "#fff",
  fontWeight: "bold",
  fontSize: 20,
};

const $Add: TextStyle = {
  color: "#fff",
  fontWeight: "bold",
  fontSize: 20,
};

const $Wrote: TextStyle = {
  color: "#fff",
  fontSize: 20,
  fontWeight: "800",
  flex: 1,
};

const $emojiButton: ViewStyle = {
  backgroundColor: "yellow",
  borderRadius: 6,
  padding: 6,
  marginLeft: 10,
  alignItems: "center",
  justifyContent: "center",
};

const $emoji: TextStyle = {
  fontSize: 20,
};
