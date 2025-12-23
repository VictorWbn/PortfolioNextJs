'use client';

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function CustomizedTimeline() {
  return (
    <section id="timeline" className="w-full py-24 bg-neutral-900/30 border-y border-neutral-900">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Mon <span className="text-orange-500">Parcours</span></h2>
        
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" className="text-gray-400">
              2025 (Avril-Juillet)
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ bgcolor: '#ea580c' }}><WorkIcon /></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span" className="text-white font-bold">Stage ADTI Wasquehal</Typography>
              <Typography className="text-gray-400 text-sm">Développement FullStack (C#, Angular)</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" className="text-gray-400">
              2023 - Aujourd'hui
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
                <TimelineDot sx={{ bgcolor: '#ea580c' }}><SchoolIcon />
                </TimelineDot>
              <TimelineConnector sx={{ bgcolor: '#dddddd' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span" className="text-white font-bold">BUT Informatique</Typography>
              <Typography className="text-gray-400 text-sm">IUT de Lens<br></br>Actuellement en 3ème année</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
              <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" className="text-gray-400">
                  2023
              </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: '#dddddd' }} />
              <TimelineDot sx={{ bgcolor: '#ea580c' }}><WorkspacePremiumIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span" className="text-white font-bold">Baccalauréat Générale</Typography>
              <Typography className="text-gray-400 text-sm">Mathématiques | NSI | Physique-Chimie<br></br>Lycée Frédéric Ozanam, Lille.<br></br>Mention Bien</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </section>
  );
}
