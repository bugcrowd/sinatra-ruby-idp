import { Modal, useMantineTheme } from '@mantine/core'
import { getPublicUrl } from '../utils'

interface SamlConfigurationModalProps {
  opened: boolean
  onClose: () => void
}

function getSamlConfiguration() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<EntityDescriptor xmlns="urn:oasis:names:tc:SAML:2.0:metadata" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion" ID="_bd7c0b53-0d5c-4864-99dc-5aa4d881081b" entityID="sdsd">
  <IDPSSODescriptor protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol">
      <KeyDescriptor use="signing">
        <KeyInfo xmlns="http://www.w3.org/2000/09/xmldsig#">
            <X509Data>
              <X509Certificate>MIIDtjCCAp4CCQCkrp2ger3dDzANBgkqhkiG9w0BAQsFADCBnDELMAkGA1UEBhMCVVMxETAPBgNVBAgMCE5ldyBZb3JrMREwDwYDVQQHDAhCcm9va2x5bjEWMBQGA1UECgwNRW50ZXJwcmlzZU9TUzENMAsGA1UECwwEZGVtbzEaMBgGA1UEAwwRZW50ZXJwcmlzZW9zcy5kZXYxJDAiBgkqhkiG9w0BCQEWFXNhbUBlbnRlcnByaXNlb3NzLmRldjAeFw0yMDEyMDkyMTU5MjVaFw0yMTEyMDkyMTU5MjVaMIGcMQswCQYDVQQGEwJVUzERMA8GA1UECAwITmV3IFlvcmsxETAPBgNVBAcMCEJyb29rbHluMRYwFAYDVQQKDA1FbnRlcnByaXNlT1NTMQ0wCwYDVQQLDARkZW1vMRowGAYDVQQDDBFlbnRlcnByaXNlb3NzLmRldjEkMCIGCSqGSIb3DQEJARYVc2FtQGVudGVycHJpc2Vvc3MuZGV2MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArAIu2YeGZaEK2AopN9ermX3iHzkUuwPvnS79VSXVZhjZOwSS4aJl+RGktZjtUyvorRm+kGlvZ1YJFux53scmXhUYc8bt/eyoB248TVnnUuZlb1Ms/OTahkNZGO1bQ2QxK2uIUYANbWt/3MKe1maw3bh+aUWewWfuc0yk6uy/P0SBn3pwA58CUcBdMqI3mKNWPIb766XnvHAnoium+QfABbWl+MRN13pryrzfjkZJjev6U6IwWYhmbQ88HW45M+BHZAO2WuZYo5bKOUtKPJqSQisB/Sw+v0VG4uNgb+6zwrUgpPY5d6En15mWbUBPtaoAqaxWd7wpEZXAJ3EIKxw6bQIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQCoSC+hc5UKWc7MO5UXU+6D+e7c0RVOls/DQzNtzZnjpkN8wWq3fpNLRx/mGamDAnkmjZK2kGqWkfizRqaAksWcpaRHz6mSUvwKVA15pOBUu+qIn+0rR7wRKTglfNWtrEKPONea1uNrB271XiYdLrxGSCAQXndWW7vo6N3DJJXRFCxUkL1W4CFEkUTG7KZuZsjpN3z9i9p/i+n9pEvfDj5x/1zoD0PIpnyrU+VLvVMUlHeklsVMC8C9XgYRWtJqJVuIrK1BraBNhZrvg8HkKLIxqU4ayc2rhlYTLC++fXIqgXlZXFwjjoWmze9+xWs+JXCN8K9hZ+YA13E8kLKcTHAD</X509Certificate>
            </X509Data>
        </KeyInfo>
      </KeyDescriptor>
      <NameIDFormat>urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified</NameIDFormat>
      <SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="${getPublicUrl()}/saml-login"/>
      <SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect" Location="${getPublicUrl()}/saml-login"/>
  </IDPSSODescriptor>
</EntityDescriptor>`
}
const SamlConfigurationModal: React.FunctionComponent<
  SamlConfigurationModalProps
> = ({ opened, onClose }) => {
  const theme = useMantineTheme()
  return (
    <>
      <Modal
        opened={opened}
        onClose={onClose}
        title='SAML Configuration'
        size='70%'
        transition='fade'
        transitionDuration={600}
        transitionTimingFunction='ease'
        overflow='inside'
        overlayColor={
          theme.colorScheme === 'dark'
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        <code>
          <pre>{getSamlConfiguration()}</pre>
        </code>
      </Modal>
    </>
  )
}

export default SamlConfigurationModal
