import * as React from 'react';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { Box, Chip, IconButton } from '@mui/joy';
import Avatar from '@mui/joy/Avatar';
import CircleIcon from '@mui/icons-material/Circle';
import { UserProps } from '../types';

type MessagesPaneHeaderProps = {
  sender: UserProps;
};

export default function MessagesPaneHeader({ sender }: MessagesPaneHeaderProps) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
      py={{ xs: 2, md: 2.5 }}
      px={{ xs: 1, md: 3 }}
    >
      <Stack direction="row" spacing={{ xs: 1, md: 2 }} alignItems="center">
        <IconButton
          variant="plain"
          color="neutral"
          sx={{
            display: { xs: 'inline-flex', sm: 'none' },
          }}
        >
          <i data-feather="chevron-left" />
        </IconButton>
        <Avatar size="lg" src={sender.avatar} />

        <div>
          <Typography
            fontWeight="lg"
            fontSize="lg"
            noWrap
            endDecorator={
              sender.online ? (
                <Chip
                  variant="outlined"
                  size="sm"
                  color="neutral"
                  sx={{
                    '--Chip-radius': '6px',
                  }}
                  startDecorator={
                    <CircleIcon sx={{ fontSize: 8 }} color="success" />
                  }
                >
                  Online
                </Chip>
              ) : undefined
            }
          >
            {sender.name}
          </Typography>

          <Typography level="body2">{sender.username}</Typography>
        </div>
      </Stack>
      <Stack spacing={1} direction="row" alignItems="center">
        <Button
          startDecorator={<i data-feather="phone-call" />}
          color="neutral"
          variant="outlined"
          sx={{
            display: { xs: 'none', md: 'inline-flex' },
          }}
        >
          Call
        </Button>
        <Button
          sx={{
            display: { xs: 'none', md: 'inline-flex' },
          }}
        >
          View profile
        </Button>

        <IconButton variant="plain" color="neutral">
          <i data-feather="more-vertical" />
        </IconButton>
      </Stack>
    </Stack>
  );
}
