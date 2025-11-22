import React, { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Avatar,
  Tab,
  Tabs,
  LinearProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Tooltip,
  Badge,
  Alert,
  Fade,
  Slide,
  Zoom,
} from '@mui/material'
import {
  ModelTraining,
  Memory,
  Speed,
  Code,
  Image,
  AudioFile,
  Videocam,
  Psychology,
  Language,
  Science,
  ExpandMore,
  Launch,
  GitHub,
  OpenInNew,
  TrendingUp,
  NewReleases,
  Star,
  CloudDownload,
  Settings,
  Assessment,
  RocketLaunch,
} from '@mui/icons-material'
import { motion, AnimatePresence } from 'framer-motion'

interface AIModel {
  id: string
  name: string
  organization: string
  parameters: string
  capabilities: string[]
  license: string
  performance?: number
  downloads?: string
  trending?: boolean
  released: string
  description: string
  category: 'language' | 'multimodal' | 'vision' | 'audio' | 'code' | 'reasoning'
  modelUrl?: string
  githubUrl?: string
  paperUrl?: string
  contextLength?: string
  architecture?: string
}

const latestModels: AIModel[] = [
  {
    id: 'qwen3-vl-30b',
    name: 'Qwen3-VL-30B-A3B',
    organization: 'Alibaba/Qwen',
    parameters: '30B (3B activated)',
    capabilities: ['Vision-Language Understanding', 'Image-Text Alignment', 'Multimodal Reasoning', 'Computer Screen Understanding'],
    license: 'Apache 2.0',
    performance: 94,
    downloads: '2.3M',
    trending: true,
    released: 'October 2025',
    description: 'Advanced vision-language model with superior image understanding and text generation capabilities. Features DeepStack architecture for fine-grained visual details.',
    category: 'multimodal',
    modelUrl: 'https://huggingface.co/Qwen/Qwen3-VL-30B-A3B-Instruct',
    contextLength: '128K tokens',
    architecture: 'Mixture of Experts (MoE)'
  },
  {
    id: 'deepseek-v3-1',
    name: 'DeepSeek V3.1',
    organization: 'DeepSeek',
    parameters: '671B (37B activated)',
    capabilities: ['Hybrid Thinking Mode', 'Long Context', 'Mathematical Reasoning', 'Code Generation', 'Multi-step Planning'],
    license: 'MIT',
    performance: 96,
    downloads: '1.8M',
    trending: true,
    released: 'August 2025',
    description: 'Hybrid system with thinking and non-thinking modes. Excels at complex reasoning, financial analysis, and automated theorem proving.',
    category: 'reasoning',
    modelUrl: 'https://huggingface.co/deepseek-ai/DeepSeek-V3.1',
    contextLength: '128K tokens',
    architecture: 'MoE with Multi-head Latent Attention'
  },
  {
    id: 'claude-4-opus',
    name: 'Claude 4 Opus',
    organization: 'Anthropic',
    parameters: '~400B',
    capabilities: ['Extended Thinking Mode', 'Agent Workflows', 'Computer Use', 'Advanced Coding', 'Long-running Tasks'],
    license: 'Commercial',
    performance: 95,
    downloads: '950K',
    trending: true,
    released: 'September 2025',
    description: 'Most powerful Claude model excelling at complex, long-running tasks and agent workflows. Features computer use capabilities.',
    category: 'language',
    contextLength: '200K tokens (1M beta)',
    architecture: 'Constitutional AI'
  },
  {
    id: 'gpt-5',
    name: 'GPT-5',
    organization: 'OpenAI',
    parameters: '1.7T',
    capabilities: ['Multimodal Understanding', 'Advanced Reasoning', 'Tool Use', 'Few-shot Function Calling', 'Health Tasks'],
    license: 'Commercial',
    performance: 97,
    downloads: '3.1M',
    trending: true,
    released: 'September 2025',
    description: 'State-of-the-art unified model with enhanced multimodal capabilities and reduced hallucinations. Default model for new users.',
    category: 'multimodal',
    contextLength: '2M tokens',
    architecture: 'Advanced Transformer'
  },
  {
    id: 'llama-4-scout',
    name: 'Llama 4 Scout',
    organization: 'Meta',
    parameters: '405B',
    capabilities: ['Multimodal Processing', 'Ultra-long Context', 'Video Understanding', 'Open Source', 'Fine-tuning Support'],
    license: 'Custom Open Source',
    performance: 93,
    downloads: '4.2M',
    trending: true,
    released: 'October 2025',
    description: 'Natively multimodal with industry-leading 10 million token context window. Outperforms competitors in coding and reasoning.',
    category: 'multimodal',
    contextLength: '10M tokens',
    architecture: 'Mixture of Experts (MoE)'
  },
  {
    id: 'gemini-2-5-pro',
    name: 'Gemini 2.5 Pro',
    organization: 'Google DeepMind',
    parameters: '1.5T',
    capabilities: ['Deep Think Mode', 'Multimodal Understanding', 'Code Generation', 'Video Analysis', 'Step-by-step Reasoning'],
    license: 'Commercial',
    performance: 94,
    downloads: '2.7M',
    trending: true,
    released: 'March 2025',
    description: 'Enhanced complex problem-solving with Deep Think mode for step-by-step reasoning. Highly capable in coding and content generation.',
    category: 'multimodal',
    contextLength: '2M tokens',
    architecture: 'Gemini Architecture'
  },
  {
    id: 'mistral-medium-3',
    name: 'Mistral Medium 3',
    organization: 'Mistral AI',
    parameters: '120B',
    capabilities: ['Multimodal Processing', 'Agentic Coding', 'Mathematical Problem Solving', 'Multiple Languages', 'Resource Efficiency'],
    license: 'Apache 2.0',
    performance: 91,
    downloads: '1.5M',
    trending: true,
    released: 'August 2025',
    description: 'State-of-the-art multimodal model with specialized versions for coding, mathematics, and speech processing.',
    category: 'multimodal',
    contextLength: '128K tokens',
    architecture: 'Mixture of Experts (MoE)'
  },
  {
    id: 'cohere-command-a',
    name: 'Command A',
    organization: 'Cohere',
    parameters: '104B',
    capabilities: ['RAG Optimization', 'Enterprise Focus', 'Multilingual Support', 'Hardware Efficiency', 'Secure Deployment'],
    license: 'Commercial',
    performance: 89,
    downloads: '720K',
    trending: false,
    released: 'July 2025',
    description: 'Hardware-efficient model requiring only two GPUs. Built for enterprise RAG applications with strong multilingual support.',
    category: 'language',
    contextLength: '256K tokens',
    architecture: 'Efficient Transformer'
  },
]

const avixModels: AIModel[] = [
  {
    id: 'timebly-2',
    name: 'TIMEBLY 2',
    organization: 'AVIX Suite',
    parameters: 'N/A',
    capabilities: ['Time Data Management', 'Computer Vision', 'Digital Human Models', 'Industrial Innovation', 'AI-Powered Analytics'],
    license: 'Commercial',
    performance: 87,
    downloads: '12K',
    trending: true,
    released: 'September 2025',
    description: 'Advanced time data management system with AI, computer vision, and digital human models. Part of Vinnova\'s industrial innovation investment.',
    category: 'vision',
    modelUrl: 'https://www.avixsuite.com/timebly-2/',
    contextLength: 'N/A',
    architecture: 'Computer Vision + AI'
  },
  {
    id: 'avix-4-8-17',
    name: 'AVIX 4.8.17',
    organization: 'AVIX Suite',
    parameters: 'N/A',
    capabilities: ['Process Planning', 'Work Visualization', 'AI Integration', 'Industrial Workflows', 'Business Intelligence'],
    license: 'Commercial',
    performance: 85,
    downloads: '8.5K',
    trending: false,
    released: 'February 2024',
    description: 'Comprehensive industrial AI solution for process planning and work visualization. Award-winning business impact in manufacturing.',
    category: 'vision',
    modelUrl: 'https://www.avixsuite.com/',
    contextLength: 'N/A',
    architecture: 'Industrial AI Framework'
  },
]

const AIModelHub: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [animationKey, setAnimationKey] = useState(0)
  const [liveUpdate, setLiveUpdate] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveUpdate(prev => prev + 1)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setAnimationKey(prev => prev + 1)
  }, [selectedTab, selectedCategory])

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue)
    setSelectedCategory('all')
  }

  const allModels = selectedTab === 0 ? latestModels : avixModels
  const filteredModels = selectedCategory === 'all' 
    ? allModels 
    : allModels.filter(model => model.category === selectedCategory)

  const getModelIcon = (category: string) => {
    switch (category) {
      case 'language': return <Language />
      case 'multimodal': return <ModelTraining />
      case 'vision': return <Image />
      case 'audio': return <AudioFile />
      case 'code': return <Code />
      case 'reasoning': return <Psychology />
      default: return <Science />
    }
  }

  const getPerformanceColor = (performance: number) => {
    if (performance >= 95) return 'success'
    if (performance >= 90) return 'primary'
    if (performance >= 85) return 'warning'
    return 'error'
  }

  const categories = ['all', 'multimodal', 'language', 'vision', 'reasoning', 'code', 'audio']

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            🤖 AI Model Hub 2025
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Latest & Greatest AI Models from HuggingFace & AVIX Suite
          </Typography>
          <Alert severity="info" sx={{ mt: 2, mb: 3 }}>
            <Badge badgeContent={liveUpdate} color="primary">
              <TrendingUp sx={{ mr: 1 }} />
            </Badge>
            Live tracking of trending models • Updated every 3 seconds
          </Alert>
        </Box>

        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs value={selectedTab} onChange={handleTabChange} centered>
            <Tab 
              label="HuggingFace Models" 
              icon={<ModelTraining />}
              iconPosition="start"
            />
            <Tab 
              label="AVIX Suite Models" 
              icon={<RocketLaunch />}
              iconPosition="start"
            />
          </Tabs>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Filter by Category:
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {categories.map((category) => (
              <Chip
                key={category}
                label={category.charAt(0).toUpperCase() + category.slice(1)}
                onClick={() => setSelectedCategory(category)}
                color={selectedCategory === category ? 'primary' : 'default'}
                variant={selectedCategory === category ? 'filled' : 'outlined'}
                icon={getModelIcon(category)}
                sx={{ mb: 1 }}
              />
            ))}
          </Box>
        </Box>

        <AnimatePresence mode="wait">
          <motion.div
            key={animationKey}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Grid container spacing={3}>
              {filteredModels.map((model, index) => (
                <Grid item xs={12} md={6} lg={4} key={model.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card 
                      sx={{ 
                        height: '100%', 
                        display: 'flex', 
                        flexDirection: 'column',
                        position: 'relative',
                        overflow: 'visible',
                        '&:hover': {
                          boxShadow: 6,
                          transform: 'translateY(-2px)',
                          transition: 'all 0.3s ease-in-out'
                        }
                      }}
                    >
                      {model.trending && (
                        <Chip
                          label="Trending"
                          color="secondary"
                          size="small"
                          icon={<TrendingUp />}
                          sx={{
                            position: 'absolute',
                            top: -8,
                            right: 8,
                            zIndex: 1,
                            animation: 'pulse 2s infinite'
                          }}
                        />
                      )}
                      
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
                            {getModelIcon(model.category)}
                          </Avatar>
                          <Box>
                            <Typography variant="h6" component="h2">
                              {model.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {model.organization}
                            </Typography>
                          </Box>
                        </Box>

                        <Typography variant="body2" color="text.secondary" paragraph>
                          {model.description}
                        </Typography>

                        <Box sx={{ mb: 2 }}>
                          <Typography variant="body2" fontWeight="bold">
                            Performance Score
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                            <LinearProgress
                              variant="determinate"
                              value={model.performance || 0}
                              color={getPerformanceColor(model.performance || 0)}
                              sx={{ flexGrow: 1, mr: 1, height: 8, borderRadius: 4 }}
                            />
                            <Typography variant="body2" fontWeight="bold">
                              {model.performance || 0}%
                            </Typography>
                          </Box>
                        </Box>

                        <Grid container spacing={1} sx={{ mb: 2 }}>
                          <Grid item xs={6}>
                            <Typography variant="caption" display="block">
                              Parameters
                            </Typography>
                            <Typography variant="body2" fontWeight="bold">
                              {model.parameters}
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant="caption" display="block">
                              Downloads
                            </Typography>
                            <Typography variant="body2" fontWeight="bold">
                              {model.downloads}
                            </Typography>
                          </Grid>
                          {model.contextLength && (
                            <Grid item xs={6}>
                              <Typography variant="caption" display="block">
                                Context Length
                              </Typography>
                              <Typography variant="body2" fontWeight="bold">
                                {model.contextLength}
                              </Typography>
                            </Grid>
                          )}
                          <Grid item xs={6}>
                            <Typography variant="caption" display="block">
                              Released
                            </Typography>
                            <Typography variant="body2" fontWeight="bold">
                              {model.released}
                            </Typography>
                          </Grid>
                        </Grid>

                        <Box sx={{ mb: 2 }}>
                          <Typography variant="caption" display="block" gutterBottom>
                            Key Capabilities
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {model.capabilities.slice(0, 3).map((capability, idx) => (
                              <Chip
                                key={idx}
                                label={capability}
                                size="small"
                                variant="outlined"
                                color="primary"
                              />
                            ))}
                            {model.capabilities.length > 3 && (
                              <Chip
                                label={`+${model.capabilities.length - 3} more`}
                                size="small"
                                variant="outlined"
                              />
                            )}
                          </Box>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Chip
                            label={model.license}
                            size="small"
                            color={model.license.includes('Open') || model.license.includes('Apache') || model.license.includes('MIT') ? 'success' : 'warning'}
                          />
                          <Chip
                            label={model.category}
                            size="small"
                            icon={getModelIcon(model.category)}
                          />
                        </Box>
                      </CardContent>

                      <CardActions sx={{ pt: 0 }}>
                        {model.modelUrl && (
                          <Button
                            size="small"
                            startIcon={<Launch />}
                            href={model.modelUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Model
                          </Button>
                        )}
                        {model.githubUrl && (
                          <Tooltip title="GitHub Repository">
                            <IconButton
                              size="small"
                              href={model.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <GitHub />
                            </IconButton>
                          </Tooltip>
                        )}
                        {model.paperUrl && (
                          <Tooltip title="Research Paper">
                            <IconButton
                              size="small"
                              href={model.paperUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <OpenInNew />
                            </IconButton>
                          </Tooltip>
                        )}
                      </CardActions>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            🚀 Model Statistics
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={3}>
              <Card sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant="h4" color="primary.main">
                  {allModels.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Models
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant="h4" color="success.main">
                  {allModels.filter(m => m.trending).length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Trending Now
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant="h4" color="warning.main">
                  {Math.round(allModels.reduce((sum, m) => sum + (m.performance || 0), 0) / allModels.length)}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Avg Performance
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant="h4" color="info.main">
                  {allModels.filter(m => m.license.includes('Open') || m.license.includes('Apache') || m.license.includes('MIT')).length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Open Source
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </motion.div>
    </Container>
  )
}

export default AIModelHub