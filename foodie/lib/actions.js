"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInvalidData(data) {
  return !data || data.trim() === "";
}

export async function handleMealShareForm(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidData(meal.title) ||
    isInvalidData(meal.summary) ||
    isInvalidData(meal.instructions) ||
    isInvalidData(meal.creator) ||
    isInvalidData(meal.creator_email) ||
    !meal.creator_email.include("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input or empy input field",
    };
  }

  // console.log(meal);
  await saveMeal(meal);
  redirect("/meals", "replace");
}
