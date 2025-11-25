import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DOMPurify from "dompurify";
import { Dots } from "@zendeskgarden/react-loaders";

interface ServiceDescriptionProps {
  selectedOption: string | number | null;
}

const DescriptionBox = styled.div`
  margin-top: ${(props) => props.theme.space.sm};
  padding: ${(props) => props.theme.space.md};
  background-color: ${(props) => props.theme.palette.grey[100]};
  border-radius: ${(props) => props.theme.borderRadii.md};
  border: 1px solid ${(props) => props.theme.palette.grey[300]};
`;

export const ServiceDescription = ({
  selectedOption,
}: ServiceDescriptionProps) => {
  const [descriptions, setDescriptions] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDescriptions = async () => {
      try {
        const response = await fetch(
          "/api/v2/custom_objects/atributo_de_servicio/records"
        );
        if (!response.ok) {
          setLoading(false);
          return;
        }
        const data = await response.json();
        const mapping: Record<string, string> = {};

        if (data.custom_object_records) {
          data.custom_object_records.forEach((record: any) => {
            const attrs = record.custom_object_fields || record.attributes;
            if (!attrs) return;

            const tag = attrs.etiqueta;
            const desc = attrs.descripcion;

            if (tag && desc) {
              mapping[tag] = desc;
            }
          });
        }

        setDescriptions(mapping);
      } catch (err) {
        console.error("Error fetching service descriptions", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDescriptions();
  }, []);

  if (!selectedOption) {
    return null;
  }

  const description = descriptions[selectedOption.toString()];

  if (loading) {
    return <Dots />;
  }

  if (!description) {
    return null;
  }

  const sanitizedDescription = DOMPurify.sanitize(description);

  return (
    <DescriptionBox>
      <div dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
    </DescriptionBox>
  );
};
