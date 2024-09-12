import React from "react";
import { Container, Typography, Box, Card, CardContent, Grid, Divider } from "@mui/material";

const sampleTransactions = [
  { id: 1, name: "Grocery Store", amount: -45.67, date: "2024-09-01" },
  { id: 2, name: "Salary", amount: 2500.00, date: "2024-09-01" },
  { id: 3, name: "Online Subscription", amount: -15.99, date: "2024-09-02" },
  { id: 4, name: "Electric Bill", amount: -75.00, date: "2024-09-05" },
];

export default function Dashboard() {
  // Placeholder for user data
  const userName = "John Doe";
  const accountBalance = 2363.34;

  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        bgcolor="#f5f5f5"
        padding={3}
      >
        {/* User Info */}
        <Box display="flex" justifyContent="flex-end" width="100%" marginBottom={2}>
          <Typography variant="h6">Welcome, {userName}</Typography>
        </Box>

        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>

        <Grid container spacing={3}>

          {/* Account Balance Card */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Account Balance
                </Typography>
                <Typography variant="h4" color="textPrimary">
                  ${accountBalance.toFixed(2)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Recent Transactions Card */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Recent Transactions
                </Typography>
                <Divider />
                {sampleTransactions.length > 0 ? sampleTransactions.map(transaction => (
                  <Box key={transaction.id} display="flex" justifyContent="space-between" paddingY={1}>
                    <Typography variant="body2">{transaction.name} - {transaction.date}</Typography>
                    <Typography variant="body2" color={transaction.amount < 0 ? 'error' : 'success'}>
                      ${transaction.amount.toFixed(2)}
                    </Typography>
                  </Box>
                )) : (
                  <Typography>No transactions found.</Typography>
                )}
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Box>
    </Container>
  );
}

