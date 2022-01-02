import React from 'react'
import { Box, Flex } from 'rebass'

export default props =>
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
    <Box
      sx={{
        p: 3
      }}>
      Header
    </Box>
    <Box
      sx={{
        flex: '1 1 auto',
        p: 3
      }}>
      Content
    </Box>
    <Box
      sx={{
        p: 3
      }}>
      Footer
    </Box>
  </Box>