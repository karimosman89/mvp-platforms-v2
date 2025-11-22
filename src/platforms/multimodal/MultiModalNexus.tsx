import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Box,
  Chip,
  LinearProgress,
  Tabs,
  Tab,
  Alert,
  Divider
} from '@mui/material';
import { 
  Visibility,
  RecordVoiceOver,
  VideoFile,
  Assessment,
  Translate,
  AutoAwesome,
  Speed,
  Security,
  TrendingUp,
  Hub
} from '@mui/icons-material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`multimodal-tabpanel-${index}`}
      aria-labelledby={`multimodal-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const MultiModalNexus: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Vision-Language Understanding Use Case
  const visionLanguageKPIs = [
    { title: 'Image Understanding', value: '97.8%', change: '+5.2%', icon: <Visibility />, color: '#1976d2' },
    { title: 'Text-Image Alignment', value: '94.6%', change: '+8.1%', icon: <Assessment />, color: '#388e3c' },
    { title: 'Caption Accuracy', value: '92.3%', change: '+12%', icon: <AutoAwesome />, color: '#f57c00' },
    { title: 'Processing Speed', value: '247 ms', change: '-34%', icon: <Speed />, color: '#7b1fa2' }
  ];

  // Audio-Visual Analysis Use Case
  const audioVisualKPIs = [
    { title: 'Speech Recognition', value: '98.4%', change: '+3.7%', icon: <RecordVoiceOver />, color: '#1976d2' },
    { title: 'Lip Sync Accuracy', value: '96.1%', change: '+7.8%', icon: <VideoFile />, color: '#388e3c' },
    { title: 'Emotion Detection', value: '89.7%', change: '+15%', icon: <Assessment />, color: '#f57c00' },
    { title: 'Real-time Processing', value: '30 fps', change: '+25%', icon: <Speed />, color: '#7b1fa2' }
  ];

  // Cross-Modal Content Generation Use Case
  const contentGenerationKPIs = [
    { title: 'Content Quality', value: '93.8%', change: '+9.4%', icon: <AutoAwesome />, color: '#1976d2' },
    { title: 'Style Consistency', value: '91.2%', change: '+11%', icon: <Assessment />, color: '#388e3c' },
    { title: 'Generation Speed', value: '1.8 sec', change: '-42%', icon: <Speed />, color: '#f57c00' },
    { title: 'User Satisfaction', value: '88.6%', change: '+18%', icon: <TrendingUp />, color: '#7b1fa2' }
  ];

  // Document Intelligence Use Case
  const documentIntelligenceKPIs = [
    { title: 'OCR Accuracy', value: '99.2%', change: '+2.1%', icon: <Visibility />, color: '#1976d2' },
    { title: 'Layout Understanding', value: '95.7%', change: '+6.8%', icon: <Assessment />, color: '#388e3c' },
    { title: 'Information Extraction', value: '92.4%', change: '+13%', icon: <AutoAwesome />, color: '#f57c00' },
    { title: 'Processing Throughput', value: '184 docs/min', change: '+31%', icon: <Speed />, color: '#7b1fa2' }
  ];

  // Real-time Translation Use Case
  const translationKPIs = [
    { title: 'Translation Accuracy', value: '94.3%', change: '+7.6%', icon: <Translate />, color: '#1976d2' },
    { title: 'Language Coverage', value: '127 langs', change: '+23%', icon: <Assessment />, color: '#388e3c' },
    { title: 'Response Time', value: '892 ms', change: '-28%', icon: <Speed />, color: '#f57c00' },
    { title: 'Context Preservation', value: '91.8%', change: '+14%', icon: <Security />, color: '#7b1fa2' }
  ];

  // Multimedia Search Use Case
  const multimediaSearchKPIs = [
    { title: 'Search Precision', value: '96.7%', change: '+8.9%', icon: <Visibility />, color: '#1976d2' },
    { title: 'Cross-modal Retrieval', value: '93.1%', change: '+12%', icon: <Hub />, color: '#388e3c' },
    { title: 'Query Understanding', value: '89.4%', change: '+19%', icon: <Assessment />, color: '#f57c00' },
    { title: 'Index Size', value: '2.3B items', change: '+156%', icon: <TrendingUp />, color: '#7b1fa2' }
  ];

  const renderKPICards = (kpis: any[]) => (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      {kpis.map((kpi, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                <Box sx={{ color: kpi.color }}>
                  {kpi.icon}
                </Box>
                <Chip 
                  label={kpi.change} 
                  color={kpi.change.startsWith('+') ? "success" : "error"} 
                  size="small" 
                />
              </Box>
              <Typography variant="h4" component="div" gutterBottom>
                {kpi.value}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                {kpi.title}
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={Math.random() * 100} 
                sx={{ mt: 1 }}
              />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        MultiModal Nexus
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        Advanced multimodal AI platform processing text, images, audio, and video with cross-modal understanding and content generation
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="multimodal use cases">
          <Tab label="Vision-Language" />
          <Tab label="Audio-Visual" />
          <Tab label="Content Generation" />
          <Tab label="Document Intelligence" />
          <Tab label="Real-time Translation" />
          <Tab label="Multimedia Search" />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        <Typography variant="h5" gutterBottom>Vision-Language Understanding</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Advanced vision-language models that understand and connect visual content with natural language descriptions for comprehensive multimodal analysis.
        </Typography>
        {renderKPICards(visionLanguageKPIs)}
        <Alert severity="success" sx={{ mb: 2 }}>
          <strong>Vision-Language Update:</strong> Processed 2,847 image-text pairs with 97.8% understanding accuracy. New fine-tuned model deployed for medical imaging.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Visual Question Answering</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Scene Understanding" color="primary" size="small" />
                  <Chip label="Object Recognition" color="secondary" size="small" />
                  <Chip label="Spatial Reasoning" color="success" size="small" />
                </Box>
                <Typography variant="body2">Advanced visual question answering with deep scene understanding and spatial reasoning capabilities.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Image Captioning</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Detailed Descriptions" color="primary" size="small" />
                  <Chip label="Context Awareness" color="warning" size="small" />
                  <Chip label="Style Adaptation" color="info" size="small" />
                </Box>
                <Typography variant="body2">Intelligent image captioning with detailed descriptions, context awareness, and adaptable writing styles.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Typography variant="h5" gutterBottom>Audio-Visual Synchronization</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Sophisticated audio-visual analysis combining speech recognition, lip-sync detection, and emotion analysis for comprehensive multimedia understanding.
        </Typography>
        {renderKPICards(audioVisualKPIs)}
        <Alert severity="info" sx={{ mb: 2 }}>
          <strong>Audio-Visual Alert:</strong> Real-time lip-sync verification achieving 96.1% accuracy. Processing 30 fps for live video streams.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Speech-to-Video Alignment</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Lip Sync Detection" color="primary" size="small" />
                  <Chip label="Audio Synchronization" color="secondary" size="small" />
                  <Chip label="Quality Assessment" color="success" size="small" />
                </Box>
                <Typography variant="body2">Precise speech-to-video alignment with lip-sync detection and audio synchronization quality assessment.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Multimodal Emotion Analysis</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Facial Expression" color="primary" size="small" />
                  <Chip label="Voice Tone" color="warning" size="small" />
                  <Chip label="Gesture Recognition" color="info" size="small" />
                </Box>
                <Typography variant="body2">Comprehensive emotion analysis combining facial expressions, voice tone, and gesture recognition.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <Typography variant="h5" gutterBottom>Cross-Modal Content Generation</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Advanced content generation across modalities including text-to-image, image-to-text, and style transfer with high quality and consistency.
        </Typography>
        {renderKPICards(contentGenerationKPIs)}
        <Alert severity="warning" sx={{ mb: 2 }}>
          <strong>Generation Alert:</strong> High-quality content batch completed. 847 images generated from text prompts with 93.8% quality score.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Text-to-Image Generation</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Diffusion Models" color="primary" size="small" />
                  <Chip label="Style Control" color="secondary" size="small" />
                  <Chip label="High Resolution" color="success" size="small" />
                </Box>
                <Typography variant="body2">State-of-the-art text-to-image generation with precise style control and high-resolution output.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Neural Style Transfer</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Artistic Styles" color="primary" size="small" />
                  <Chip label="Content Preservation" color="warning" size="small" />
                  <Chip label="Real-time Processing" color="info" size="small" />
                </Box>
                <Typography variant="body2">Advanced neural style transfer preserving content while applying artistic styles in real-time.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={3}>
        <Typography variant="h5" gutterBottom>Intelligent Document Processing</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Comprehensive document intelligence with OCR, layout understanding, and information extraction for automated document processing.
        </Typography>
        {renderKPICards(documentIntelligenceKPIs)}
        <Alert severity="success" sx={{ mb: 2 }}>
          <strong>Document Processing:</strong> 2,847 documents processed today with 99.2% OCR accuracy. Information extraction completed for all financial reports.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Advanced OCR</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Multi-language Support" color="primary" size="small" />
                  <Chip label="Handwriting Recognition" color="secondary" size="small" />
                  <Chip label="Table Extraction" color="success" size="small" />
                </Box>
                <Typography variant="body2">Advanced OCR with multi-language support, handwriting recognition, and structured table extraction.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Document Understanding</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Layout Analysis" color="primary" size="small" />
                  <Chip label="Entity Extraction" color="warning" size="small" />
                  <Chip label="Relationship Mapping" color="info" size="small" />
                </Box>
                <Typography variant="body2">Intelligent document understanding with layout analysis, entity extraction, and relationship mapping.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={4}>
        <Typography variant="h5" gutterBottom>Real-time Multilingual Translation</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Advanced real-time translation services supporting 127+ languages with context preservation and cultural adaptation.
        </Typography>
        {renderKPICards(translationKPIs)}
        <Alert severity="info" sx={{ mb: 2 }}>
          <strong>Translation Update:</strong> Real-time conference translation active for 12 languages. Average response time: 892ms with 94.3% accuracy.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Neural Machine Translation</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Transformer Models" color="primary" size="small" />
                  <Chip label="Context Awareness" color="secondary" size="small" />
                  <Chip label="Domain Adaptation" color="success" size="small" />
                </Box>
                <Typography variant="body2">State-of-the-art neural machine translation with context awareness and domain-specific adaptation.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Cultural Localization</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Cultural Context" color="primary" size="small" />
                  <Chip label="Idiom Translation" color="warning" size="small" />
                  <Chip label="Regional Variants" color="info" size="small" />
                </Box>
                <Typography variant="body2">Advanced cultural localization with idiom translation and regional language variant support.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={5}>
        <Typography variant="h5" gutterBottom>Multimedia Search & Retrieval</Typography>
        <Typography variant="body1" paragraph color="textSecondary">
          Powerful multimedia search engine enabling cross-modal retrieval with natural language queries across images, videos, and audio content.
        </Typography>
        {renderKPICards(multimediaSearchKPIs)}
        <Alert severity="error" sx={{ mb: 2 }}>
          <strong>Search Alert:</strong> Query volume spike detected. Auto-scaling activated. Index now serving 2.3B multimedia items with 96.7% precision.
        </Alert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Cross-Modal Retrieval</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Text-to-Image Search" color="primary" size="small" />
                  <Chip label="Image-to-Text Search" color="secondary" size="small" />
                  <Chip label="Semantic Similarity" color="success" size="small" />
                </Box>
                <Typography variant="body2">Advanced cross-modal retrieval enabling text-to-image and image-to-text search with semantic similarity matching.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Intelligent Indexing</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Vector Embeddings" color="primary" size="small" />
                  <Chip label="Hierarchical Clustering" color="warning" size="small" />
                  <Chip label="Real-time Updates" color="info" size="small" />
                </Box>
                <Typography variant="body2">Intelligent multimedia indexing with vector embeddings, hierarchical clustering, and real-time content updates.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
    </Container>
  );
};

export default MultiModalNexus;
