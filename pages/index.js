import {
  Box,
  Button,
  Container,
  Heading,
  Grid,
  Text,
  Textarea,
  Label,
  Flex,
  Checkbox,
  Select,
  Input,
} from 'theme-ui'

export default function Index() {
  return (
    <Grid as="main" variant="wide" columns="2fr 1fr" sx={{ gap: '0px' }}>
      <Flex
        sx={{
          alignItems: 'center',
          minHeight: '100vh',
          py: 4,
          backgroundImage:
            'linear-gradient(90deg, rgba(2,0,16,0.7368522408963585) 0%, rgba(2,0,16,0.669625350140056) 100%), url(https://estaticos.muyhistoria.es/uploads/images/ephemeris/5d650cea5bafe8b9b88f1ca0/REDES.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: '70%',
          textShadow: 'card',
        }}
      >
        <Box px={4} mb={3}>
          <Heading sx={{ fontSize: '128px' }}>
            A <Text sx={{ fontStyle: 'italic', color: 'pink' }}>WILD</Text>{' '}
            <br />
            STYLE OF QUIZ BOWL
          </Heading>
          <Heading
            as="h1"
            sx={{
              borderTop: '4px solid white',
              width: 'max-content',
              mt: 3,
              pt: 3,
              ml: 2,
              pr: 4,
            }}
          >
            4PM to 7PM, November 19th 2021
          </Heading>
        </Box>
      </Flex>
      <Flex sx={{ alignItems: 'center' }}>
        <Box sx={{ width: '100%', px: 3 }}>
          <Heading></Heading>
          <Input placeholder="Team Name" sx={{ bg: 'sunken', mb: 2 }} />
          <Input
            placeholder="Contact Email Address"
            sx={{ bg: 'sunken', mb: 2 }}
          />
          <Textarea
            defaultValue="Hello"
            rows={8}
            placeholder={`List Your Team Members`}
            sx={{ bg: 'sunken', mb: 3 }}
          />
          <Button>Sign up!</Button>
        </Box>
      </Flex>
    </Grid>
  )
}
