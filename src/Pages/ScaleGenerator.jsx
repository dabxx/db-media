import React, { useState, useEffect, useMemo } from "react";
import { Music, Piano, Play } from "lucide-react";

const CircleOfFifthsApp = () => {
  const [selectedNote, setSelectedNote] = useState("C");
  const [selectedMode, setSelectedMode] = useState("major");
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredNote, setHoveredNote] = useState(null);

  // Circle of fifths notes (clockwise)
  const circleOfFifths = [
    "C",
    "G",
    "D",
    "A",
    "E",
    "B",
    "F#/Gb",
    "Db",
    "Ab",
    "Eb",
    "Bb",
    "F",
  ];

  // Scale patterns (intervals in semitones)
  const scalePatterns = {
    major: [0, 2, 4, 5, 7, 9, 11],
    minor: [0, 2, 3, 5, 7, 8, 10],
    dorian: [0, 2, 3, 5, 7, 9, 10],
    mixolydian: [0, 2, 4, 5, 7, 9, 10],
    pentatonic: [0, 2, 4, 7, 9],
  };

  // All chromatic notes
  const chromaticNotes = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];

  // Generate scale notes
  const generateScale = (rootNote, mode) => {
    const rootIndex = chromaticNotes.indexOf(rootNote.replace("b", "#"));
    const pattern = scalePatterns[mode];

    return pattern.map((interval) => {
      const noteIndex = (rootIndex + interval) % 12;
      return chromaticNotes[noteIndex];
    });
  };

  const scaleNotes = useMemo(
    () => generateScale(selectedNote, selectedMode),
    [selectedNote, selectedMode]
  );

  // Handle note selection
  const handleNoteSelect = (note) => {
    setIsAnimating(true);
    setSelectedNote(note);
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Circle positions
  const getCirclePosition = (index, radius = 140) => {
    const angle = index * 30 - 90; // 30 degrees per note, start at top
    const radian = (angle * Math.PI) / 180;
    return {
      x: radius * Math.cos(radian),
      y: radius * Math.sin(radian),
    };
  };

  // Bass guitar fretboard visualization
  const BassGuitarNeck = () => {
    const strings = ["G", "D", "A", "E"]; // Bass guitar strings (top to bottom)
    const frets = Array.from({ length: 13 }, (_, i) => i);

    const getNoteAtFret = (openNote, fret) => {
      const openIndex = chromaticNotes.indexOf(openNote);
      return chromaticNotes[(openIndex + fret) % 12];
    };

    return (
      <div className="bg-gray-900 rounded-xl p-6 shadow-2xl">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Music className="w-5 h-5" />
          Bass Guitar Fretboard
        </h3>
        <div className="relative overflow-x-auto">
          <div className="min-w-[800px]">
            {strings.map((string, stringIndex) => (
              <div key={stringIndex} className="flex items-center mb-2">
                <div className="w-8 text-white text-sm font-bold text-right mr-4">
                  {string}
                </div>
                <div className="flex-1 relative h-8 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full shadow-inner">
                  {frets.map((fret) => {
                    const note = getNoteAtFret(string, fret);
                    const isScaleNote = scaleNotes.includes(note);
                    const isRootNote = note === selectedNote;

                    return (
                      <div
                        key={fret}
                        className="absolute top-0 h-full flex items-center justify-center"
                        style={{
                          left: `${(fret / 12) * 100}%`,
                          width: `${100 / 12}%`,
                        }}
                      >
                        {fret > 0 && (
                          <div className="w-0.5 h-full bg-gray-600 absolute left-0"></div>
                        )}
                        {isScaleNote && (
                          <div
                            className={`
                            w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                            transform transition-all duration-300 hover:scale-110
                            ${
                              isRootNote
                                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/50"
                                : "bg-green-400 text-gray-800 shadow-lg"
                            }
                            ${isAnimating ? "animate-pulse" : ""}
                          `}
                          >
                            {note}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Piano keyboard visualization
  const PianoKeyboard = () => {
    const whiteKeys = ["C", "D", "E", "F", "G", "A", "B"];
    const blackKeys = [null, "C#", "D#", null, "F#", "G#", "A#"];

    return (
      <div className="bg-gray-900 rounded-xl p-3 sm:p-4 lg:p-6 shadow-2xl">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
          <Piano className="w-4 h-4 sm:w-5 sm:h-5" />
          Piano Keyboard
        </h3>
        <div className="relative overflow-x-auto">
          <div className="min-w-[300px] sm:min-w-[400px]">
            <div className="flex">
              {whiteKeys.map((note, index) => {
                const isScaleNote = scaleNotes.includes(note);
                const isRootNote = note === selectedNote;

                return (
                  <div
                    key={note}
                    className={`
                      w-8 sm:w-10 lg:w-12 h-20 sm:h-24 lg:h-32 border border-gray-300 relative cursor-pointer
                      transition-all duration-300 transform hover:scale-105
                      ${
                        isScaleNote
                          ? isRootNote
                            ? "bg-blue-200 border-blue-400 shadow-lg shadow-blue-500/30"
                            : "bg-green-100 border-green-400 shadow-lg shadow-green-500/20"
                          : "bg-white hover:bg-gray-50"
                      }
                      ${isAnimating && isScaleNote ? "animate-pulse" : ""}
                    `}
                    onClick={() => handleNoteSelect(note)}
                  >
                    <div className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm font-bold text-gray-800">
                      {note}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Black keys */}
            <div className="absolute top-0 flex">
              {blackKeys.map((note, index) => {
                if (!note)
                  return (
                    <div key={index} className="w-8 sm:w-10 lg:w-12"></div>
                  );

                const isScaleNote = scaleNotes.includes(note);
                const isRootNote = note === selectedNote;

                return (
                  <div
                    key={note}
                    className={`
                      w-5 sm:w-6 lg:w-8 h-12 sm:h-14 lg:h-20 -ml-2.5 sm:-ml-3 lg:-ml-4 cursor-pointer z-10 rounded-b
                      transition-all duration-300 transform hover:scale-105
                      ${
                        isScaleNote
                          ? isRootNote
                            ? "bg-blue-600 shadow-lg shadow-blue-500/50"
                            : "bg-green-600 shadow-lg shadow-green-500/30"
                          : "bg-gray-800 hover:bg-gray-700"
                      }
                      ${isAnimating && isScaleNote ? "animate-pulse" : ""}
                    `}
                    onClick={() => handleNoteSelect(note)}
                  >
                    <div className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-bold text-white">
                      {note}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 p-6">
      <div className="max-w-7xl sm-w-10 mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
            Circle of Fifths Explorer
          </h1>
          <p className="text-gray-300 text-lg">
            Interactive music theory tool for bass guitar and piano
          </p>
        </div>

        <div className="gap-8">
          {/* Interactive Circle of Fifths */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Interactive Circle of Fifths
            </h2>

            <div className="relative w-80 h-80 mx-auto mb-6">
              <svg viewBox="-200 -200 400 400" className="w-full h-full">
                {/* Outer circle */}
                <circle
                  cx="0"
                  cy="0"
                  r="180"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="2"
                />

                {/* Inner circle */}
                <circle
                  cx="0"
                  cy="0"
                  r="120"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="2"
                />

                {/* Center circle */}
                <circle
                  cx="0"
                  cy="0"
                  r="40"
                  fill="rgba(139, 69, 19, 0.3)"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                />

                {circleOfFifths.map((note, index) => {
                  const position = getCirclePosition(index);
                  const isSelected =
                    note === selectedNote || note.includes(selectedNote);
                  const isHovered = hoveredNote === note;

                  return (
                    <g key={note}>
                      {/* Note circle */}
                      <circle
                        cx={position.x}
                        cy={position.y}
                        r={isSelected ? "28" : isHovered ? "25" : "22"}
                        fill={
                          isSelected
                            ? "#3b82f6"
                            : isHovered
                            ? "#6366f1"
                            : "rgba(55, 65, 81, 0.8)"
                        }
                        stroke={
                          isSelected ? "#60a5fa" : "rgba(255,255,255,0.3)"
                        }
                        strokeWidth="2"
                        className="cursor-pointer transition-all duration-300"
                        style={{
                          filter: isSelected
                            ? "drop-shadow(0 0 20px #3b82f6)"
                            : "none",
                          transform:
                            isAnimating && isSelected
                              ? "scale(1.1)"
                              : "scale(1)",
                        }}
                        onClick={() => handleNoteSelect(note.split("/")[0])}
                        onMouseEnter={() => setHoveredNote(note)}
                        onMouseLeave={() => setHoveredNote(null)}
                      />

                      {/* Note text */}
                      <text
                        x={position.x}
                        y={position.y + 5}
                        textAnchor="middle"
                        className="fill-white font-bold text-sm pointer-events-none select-none"
                      >
                        {note}
                      </text>
                    </g>
                  );
                })}

                {/* Center text */}
                <text
                  x="0"
                  y="0"
                  textAnchor="middle"
                  className="fill-white font-bold text-lg pointer-events-none"
                >
                  {selectedNote}
                </text>
                <text
                  x="0"
                  y="20"
                  textAnchor="middle"
                  className="fill-gray-300 font-medium text-sm pointer-events-none"
                >
                  {selectedMode}
                </text>
              </svg>
            </div>

            {/* Mode selector */}

            <div className="flex flex-wrap justify-center gap-2 mb-4 sm:grid sm:grid-cols-2 sm:w-fit sm:mx-auto">
              {Object.keys(scalePatterns).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setSelectedMode(mode)}
                  className={`
        px-4 py-2 rounded-lg font-medium transition-all duration-300
        ${
          selectedMode === mode
            ? "bg-blue-500 text-white shadow-lg"
            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
        }
      `}
                >
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </button>
              ))}
            </div>

            {/* Scale display */}
            <div className="text-center">
              <h3 className="text-lg font-bold text-white mb-3">
                {selectedNote}{" "}
                {selectedMode.charAt(0).toUpperCase() + selectedMode.slice(1)}{" "}
                Scale
              </h3>
              <div className="flex justify-center gap-3">
                {scaleNotes.map((note, index) => (
                  <div
                    key={index}
                    className={`
                      px-3 py-2 rounded-lg font-bold transition-all duration-300
                      ${
                        note === selectedNote
                          ? "bg-blue-500 text-white shadow-lg shadow-blue-500/50"
                          : "bg-green-500 text-white shadow-lg shadow-green-500/30"
                      }
                      ${isAnimating ? "animate-bounce" : ""}
                    `}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {note}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Instruments */}
        <div className="mt-8 space-y-8">
          <BassGuitarNeck />
          <PianoKeyboard />
        </div>

        {/* Instructions and info */}
        <div className="space-y-6 mt-5">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-gray-700/50">
            <h3 className="text-xl font-bold text-white mb-4">How to Use</h3>
            <div className="space-y-3 text-gray-300">
              <p>
                • Click any note on the circle of fifths to set it as your root
                note
              </p>
              <p>
                • Choose different scales/modes using the buttons below the
                circle
              </p>
              <p>• View the scale notes highlighted on the instruments below</p>
              <p>
                • Blue dots indicate the root note, green dots show scale notes
              </p>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-gray-700/50">
            <h3 className="text-xl font-bold text-white mb-4">Music Theory</h3>
            <div className="space-y-3 text-gray-300">
              <p>
                <strong>Circle of Fifths:</strong> Each step clockwise adds a
                sharp, counterclockwise adds a flat
              </p>
              <p>
                <strong>Circle of Fourths:</strong> The reverse direction helps
                with chord progressions
              </p>
              <p>
                <strong>Scales:</strong> Different patterns of intervals create
                unique musical flavors
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleOfFifthsApp;
