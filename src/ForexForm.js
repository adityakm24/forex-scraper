import React, { useState } from "react";
import {
  Button,
  Input,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Alert,
  AlertIcon,
  Box,
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
} from "@chakra-ui/react";

function ForexForm() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [period, setPeriod] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `http://localhost:8080/api/forex-data?from=${from}&to=${to}&period=${period}`
      );
      if (response.status === 404) {
        throw new Error(
          `No data available for the currency pair ${from}${to} for the period ${period}`
        );
      } else if (!response.ok) {
        throw new Error("Failed to fetch forex data");
      }
      const result = await response.json();
      setData(result);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(
        error.message.includes("No data available")
          ? error.message
          : "Failed to fetch data. Please check the parameters or currency pair."
      );
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="p-6 flex justify-center items-center min-h-screen bg-black">
      <Card
        className="w-full max-w-md shadow-lg"
        style={{
          borderRadius: "12px",
          border: "1px solid #333",
          backgroundColor: "#111",
          color: "#fff",
        }}
      >
        <CardHeader
          style={{
            paddingBottom: "8px",
            borderBottom: "1px solid #333",
            backgroundColor: "#222",
          }}
        >
          <Heading
            as="h3"
            size="lg"
            textAlign="center"
            fontWeight="600"
            style={{ color: "#fff" }}
          >
            Forex Data Fetcher
          </Heading>
        </CardHeader>
        <CardBody style={{ padding: "16px" }}>
          {error && (
            <Alert
              status="error"
              style={{
                backgroundColor: "#ff0000", // Red background
                color: "#fff", // White text
                borderRadius: "6px",
              }}
              mb={4}
            >
              <AlertIcon color="#fff" />
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Input
                type="text"
                placeholder="From Currency (e.g., AED)"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                required
                aria-label="From Currency"
                style={{
                  padding: "10px",
                  borderRadius: "6px",
                  backgroundColor: "#222",
                  border: "1px solid #444",
                  color: "#fff",
                }}
                _placeholder={{ color: "#aaa" }}
              />

              <Input
                type="text"
                placeholder="To Currency (e.g., INR)"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                required
                aria-label="To Currency"
                style={{
                  padding: "10px",
                  borderRadius: "6px",
                  backgroundColor: "#222",
                  border: "1px solid #444",
                  color: "#fff",
                }}
                _placeholder={{ color: "#aaa" }}
              />

              <Input
                type="text"
                placeholder="Period (e.g., 1M, 3M, 1Y)"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                required
                aria-label="Period"
                style={{
                  padding: "10px",
                  borderRadius: "6px",
                  backgroundColor: "#222",
                  border: "1px solid #444",
                  color: "#fff",
                }}
                _placeholder={{ color: "#aaa" }}
              />

              <Button
                type="submit"
                colorScheme="whiteAlpha"
                width="full"
                isLoading={loading}
                loadingText="Fetching Data"
                style={{
                  backgroundColor: "#fff",
                  color: "#111",
                  borderRadius: "6px",
                  fontWeight: "500",
                }}
                _hover={{ backgroundColor: "#ddd", color: "#000" }}
              >
                Get Forex Data
              </Button>
            </Stack>
          </form>

          {loading && (
            <Box mt={6} textAlign="center">
              <Spinner size="xl" color="white" />
            </Box>
          )}

          {!loading && data.length > 0 && (
            <Box mt={6}>
              <Table
                variant="simple"
                size="md"
                style={{ borderCollapse: "separate", borderSpacing: "0 10px" }}
              >
                <Thead>
                  <Tr
                    style={{
                      backgroundColor: "#333",
                      borderBottom: "2px solid #fff",
                      textTransform: "uppercase",
                    }}
                  >
                    <Th
                      fontWeight="bold"
                      textAlign="left"
                      style={{ color: "#fff", padding: "12px" }}
                    >
                      Date
                    </Th>
                    <Th
                      fontWeight="bold"
                      textAlign="left"
                      style={{ color: "#fff", padding: "12px" }}
                    >
                      Open
                    </Th>
                    <Th
                      fontWeight="bold"
                      textAlign="left"
                      style={{ color: "#fff", padding: "12px" }}
                    >
                      Close
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((item, index) => (
                    <Tr
                      key={index}
                      _hover={{ backgroundColor: "#222" }}
                      style={{
                        borderBottom: "1px solid #444",
                        transition: "background-color 0.2s",
                      }}
                    >
                      <Td style={{ padding: "12px", color: "#fff" }}>
                        {item.date}
                      </Td>
                      <Td style={{ padding: "12px", color: "#fff" }}>
                        {item.open}
                      </Td>
                      <Td style={{ padding: "12px", color: "#fff" }}>
                        {item.close}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          )}
        </CardBody>
      </Card>
    </Box>
  );
}

export default ForexForm;
