import { Box, Button, HStack } from '@chakra-ui/react';
import React from 'react';
import { useEffect, useState } from "react";
import { AiFillPauseCircle } from 'react-icons/ai';
import { GoPlay } from "react-icons/go";

export default function Timer({ play, setPlay, projectData }) {
  const [time, setTime] = useState(0)
  useEffect(() => {
    if (play) {
      let id = setTimeout(() => {
        setTime(time => time + 1)
      }, 1000)
    }
  }, [time, play])

  const toggleTimer = () => {
    if (play) {
      setPlay(false);
    } else {
      setPlay(true);
    }
  }

// feedback: fw18_0042 and fw16_644 - you can use numeric constants here 
// example secondsInMinute = 3600, an example 
  function strToSeconds(str) {
    str = str.split(":").map(Number);
    let seconds = (str[0] * 60 * 60) + (str[1] * 60) + str[2]
    return seconds
  }

  function converter(seconds) {
    let hr = seconds / (60 * 60);
    seconds = (hr - Math.floor(hr)) * (60 * 60);
    let min = seconds / 60
    seconds = (min - Math.floor(min)) * (60)
    return `${Math.floor(hr)}:${Math.floor(min)}:${Math.floor(seconds)}`
  }

  return (
    <HStack>
      {play ? <AiFillPauseCircle cursor='pointer' color='teal' fontSize='24px' onClick={() => toggleTimer()} /> : <GoPlay fontSize='24px' cursor={'pointer'} onClick={() => toggleTimer()} />}
      <Box fontSize={"14px"} fontWeight={"light"}>{projectData.hoursCompleted}/{projectData?.data?.estimatedTime}:00</Box>
    </HStack>
  );
}
