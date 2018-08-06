import types from 'core/types';

/**
 * saveRecording - Save an audio file
 */
export function saveRecording(recording) {
 return {
    type      : types.SAVE_RECORDING,
    recording : recording
  }
}