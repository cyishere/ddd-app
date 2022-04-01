import type { Dispatch, SetStateAction } from "react";
import { Temporal } from "@js-temporal/polyfill";

/**
 * @constant The initial value of the current word
 */
export const INITIAL_CURRENT_WORD = {
  word: { id: 0, article: "", german: "", english: "" },
  index: 0,
};

/**
 * Check whether the word is ready for review.
 * @param date The current value of `available_at`
 * @returns `true` or `false`
 */
export const reviewAvailable = (date: string): boolean => {
  const availableAtInstant = Temporal.Instant.from(date);
  const availableMillionseconds = availableAtInstant.epochMilliseconds;

  const nowInstant = Temporal.Now.zonedDateTimeISO();
  const nowMillionseconds = nowInstant.epochMilliseconds;

  const differenceInTime = availableMillionseconds - nowMillionseconds;

  return differenceInTime < 0;
};

/**
 * A date that stores in the `available_at` column.
 * @param newReview The updated review level
 * @returns A date-time ISO string
 */
export const newReviewDate = (newReview: number): string => {
  const getWaitingDays = (n: number): number => {
    switch (n) {
      case 1:
        return 1;

      case 2:
        return 4;

      case 3:
        return 14;

      case 4:
        return 60;

      default:
        return 0;
    }
  };

  const waitingDays = getWaitingDays(newReview);

  const now = Temporal.Now.zonedDateTimeISO();
  const availableDate = now.add({ days: waitingDays }).toString();

  return availableDate.split("[")[0];
};

/**
 * Function for updating progress bar
 * @param currentWordIndex The index of the current word
 * @param wordsLength The length of all words
 * @param cb The dispatch function for updating `progress` state
 */
export const updateProgress = (
  currentWordIndex: number,
  wordsLength: number,
  cb: Dispatch<SetStateAction<number>>
) => {
  const currentProgress = Math.round(
    ((currentWordIndex + 1) / (wordsLength - 1 || 1)) * 100
  );
  cb(currentProgress);
};
