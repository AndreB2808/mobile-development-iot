import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Especialidade } from "./src/types/especialidades";
import { Paciente } from "./src/types/paciente";
import { Medico } from "./src/interfaces/medico";
import { Consulta } from "./src/interfaces/consulta";

type Consulta = {
  id: number;
  paciente: string;
  medico: string;
  data: string;
  status: "agendada" | "confirmada" | "cancelada" | "realizada";
};

export default function App() {
  const [consulta, setConsulta] = useState<Consulta>({
    id: 1,
    paciente: "Carlos Andrade",
    medico: "Dr. Roberto Silva",
    data: "28/02/2026",
    status: "agendada",
  });

  function confirmarConsulta() {
    setConsulta({
      ...consulta,
      status: "confirmada",
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sistema de Consultas</Text>

      <View style={styles.card}>
        <Text style={styles.textoCard}>Paciente: {consulta.paciente}</Text>
        <Text style={styles.textoCard}>Médico: {consulta.medico}</Text>
        <Text style={styles.textoCard}>Data: {consulta.data}</Text>
        <Text style={styles.textoCard}>Status: {consulta.status}</Text>

        {consulta.status === "agendada" && (
          <View style={styles.botao}>
            <Button
              title="Confirmar Consulta"
              onPress={confirmarConsulta}
            />
          </View>
        )}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffea30",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    width: "80%",
    padding: 20,
    borderWidth: 2,
    borderRadius: 12,
    backgroundColor: "#fffed0",
  },
  textoCard: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  botao: {
    marginTop: 15,
  },
});
  const cardiologia: Especialidade = {
    id: 1,
    nome: "Cardiologia",
    descricao: "Cuidados com o coração",
  };

  const medico1: Medico = {
  id: 1,
  nome: "Dr. Roberto Silva",
  crm: "CRM12345",
  especialidade: cardiologia,
  ativo: true,
};

const paciente1: Paciente = {
  id: 1,
  nome: "Carlos Andrade",
  cpf: "123.456.789-00",
  email: "carlos@email.com",
  telefone: "(11) 98765-4321",
};

const [consulta, setConsulta] = useState<Consulta>({
  id: 1,
  Medico: medico1,
  Paciente: paciente1,
  Data: new Date(2026, 2, 10),
  valor: 350,
  status: "agendada",
  observacoes: "Consulta de rotina",
});

function confirmarConsulta() {
  setConsulta({
    ...consulta,
    status: "confirmada",
  });
}

function formatarValor(valor: number): string {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function formatarData(data: Date): string {
  return data.toLocaleDateString("pt-BR");
}